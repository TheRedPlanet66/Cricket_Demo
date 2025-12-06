// Hero Animation - Animated Cricket Ball with SVG
(function () {
    const heroAnimation = document.getElementById('heroAnimation');

    if (!heroAnimation) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Show static version for users who prefer reduced motion
        heroAnimation.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="ballGradient">
                        <stop offset="0%" style="stop-color:#B30000;stop-opacity:0.3" />
                        <stop offset="100%" style="stop-color:#8B0000;stop-opacity:0" />
                    </radialGradient>
                </defs>
                <circle cx="600" cy="400" r="80" fill="url(#ballGradient)" opacity="0.5"/>
            </svg>
        `;
        return;
    }

    // Create SVG animation
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 1200 800');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    // Define gradients and filters
    svg.innerHTML = `
        <defs>
            <radialGradient id="ballGradient">
                <stop offset="0%" style="stop-color:#B30000;stop-opacity:0.8" />
                <stop offset="50%" style="stop-color:#D32F2F;stop-opacity:0.5" />
                <stop offset="100%" style="stop-color:#8B0000;stop-opacity:0" />
            </radialGradient>
            
            <radialGradient id="glowGradient">
                <stop offset="0%" style="stop-color:#B30000;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#B30000;stop-opacity:0" />
            </radialGradient>
            
            <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        <!-- Background pattern -->
        <g id="pattern" opacity="0.1">
            <line x1="0" y1="200" x2="1200" y2="200" stroke="#B30000" stroke-width="1"/>
            <line x1="0" y1="400" x2="1200" y2="400" stroke="#B30000" stroke-width="1"/>
            <line x1="0" y1="600" x2="1200" y2="600" stroke="#B30000" stroke-width="1"/>
        </g>
        
        <!-- Animated cricket ball -->
        <g id="cricketBall">
            <circle cx="0" cy="0" r="100" fill="url(#glowGradient)" filter="url(#glow)"/>
            <circle cx="0" cy="0" r="60" fill="url(#ballGradient)"/>
            <!-- Seam lines -->
            <path d="M -30,-50 Q 0,-40 30,-50" stroke="#8B0000" stroke-width="3" fill="none" opacity="0.6"/>
            <path d="M -30,50 Q 0,40 30,50" stroke="#8B0000" stroke-width="3" fill="none" opacity="0.6"/>
        </g>
        
        <!-- Trailing particles -->
        <g id="particles"></g>
    `;

    heroAnimation.appendChild(svg);

    // Animation variables
    let animationFrame;
    let time = 0;
    const ball = svg.getElementById('cricketBall');
    const particles = svg.getElementById('particles');
    const particleArray = [];

    // Particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.01;

            this.element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            this.element.setAttribute('r', this.size);
            this.element.setAttribute('fill', '#B30000');
            particles.appendChild(this.element);
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.decay;

            this.element.setAttribute('cx', this.x);
            this.element.setAttribute('cy', this.y);
            this.element.setAttribute('opacity', this.life);

            if (this.life <= 0) {
                particles.removeChild(this.element);
                return false;
            }
            return true;
        }
    }

    // Animation loop
    function animate() {
        time += 0.01;

        // Calculate ball position (figure-8 pattern)
        const centerX = 600;
        const centerY = 400;
        const radiusX = 300;
        const radiusY = 200;

        const x = centerX + Math.sin(time) * radiusX;
        const y = centerY + Math.sin(time * 2) * radiusY;

        // Update ball position
        ball.setAttribute('transform', `translate(${x}, ${y}) rotate(${time * 50})`);

        // Create particles occasionally
        if (Math.random() < 0.3) {
            particleArray.push(new Particle(x, y));
        }

        // Update particles
        for (let i = particleArray.length - 1; i >= 0; i--) {
            if (!particleArray[i].update()) {
                particleArray.splice(i, 1);
            }
        }

        // Limit particles
        if (particleArray.length > 50) {
            const removed = particleArray.shift();
            if (removed.element.parentNode) {
                particles.removeChild(removed.element);
            }
        }

        animationFrame = requestAnimationFrame(animate);
    }

    // Parallax effect on scroll
    let scrollY = 0;
    function handleScroll() {
        scrollY = window.pageYOffset;
        if (heroAnimation) {
            heroAnimation.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Start animation
    animate();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        window.removeEventListener('scroll', handleScroll);
    });
})();
