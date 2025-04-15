import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Configuration for node network
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = window.innerWidth < 768 ? 25 : 50;
    const connectionDistance = window.innerWidth < 768 ? 150 : 200;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 98, 255, 0.4)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            
            // Line opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 98, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white glow-text">
            A inteligência artificial que trabalha por você
            <span className="block text-cyber-blue mt-2">em rede, em fluxo, em tempo real.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyber-silver/80 mb-8 leading-relaxed">
            Automatize processos empresariais complexos com agentes 
            de IA especializados que colaboram entre si.
          </p>
          
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-cyber-blue/30 shadow-[0_0_30px_rgba(0,98,255,0.15)] mb-10">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/oxBYIZkloSI" 
                title="IntegrAI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <a 
            href="#contato" 
            className="cyber-button inline-flex items-center text-lg animate-glow"
          >
            Quero automatizar minha empresa
          </a>

          <div className="mt-16 flex justify-center">
            <div className="w-2 h-8 border border-cyber-blue/50 rounded-full relative overflow-hidden">
              <span className="absolute top-0 left-0 right-0 bottom-0 bg-cyber-blue-light animate-pulse-light"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
