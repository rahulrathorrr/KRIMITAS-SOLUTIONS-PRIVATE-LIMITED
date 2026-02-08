import React, { useEffect, useRef } from 'react';

const BubbleCursor = () => {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Track mouse movement
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      addBubble(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Bubble Class-like structure
    const addBubble = (x, y) => {
      bubblesRef.current.push({
        x: x,
        y: y,
        size: Math.random() * 15 + 5, // Random size between 5 and 20
        color: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`, // Blueish transparent
        speedX: Math.random() * 2 - 1, // Slight drift X
        speedY: Math.random() * 2 - 1, // Slight drift Y
        life: 1.0 // Opacity/Life
      });
    };

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw bubbles
      bubblesRef.current.forEach((bubble, index) => {
        bubble.life -= 0.02; // Fade out speed
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        bubble.size *= 0.95; // Shrink slowly

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, Math.max(0, bubble.size), 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();

        // Remove dead bubbles
        if (bubble.life <= 0 || bubble.size <= 0.5) {
          bubblesRef.current.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: 'multiply' }} // Optional: cool blending effect
    />
  );
};

export default BubbleCursor;