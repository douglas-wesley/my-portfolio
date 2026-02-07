import { useRef, useState, useEffect, type ReactNode } from 'react'

interface CarouselProps {
    children: ReactNode
    className?: string
    speed?: number
}

const Carousel = ({ children, className = '', speed = 0.5 }: CarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const animationRef = useRef<number>()
    const offsetRef = useRef(0)

    useEffect(() => {
        const track = trackRef.current
        const container = containerRef.current
        if (!track || !container) return

        const animate = () => {
            if (!isDragging) {
                offsetRef.current += speed
                const halfWidth = track.scrollWidth / 2

                if (offsetRef.current >= halfWidth) {
                    offsetRef.current = 0
                }

                track.style.transform = `translateX(-${offsetRef.current}px)`
            }
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isDragging, speed])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        setIsDragging(true)
        setStartX(e.pageX - containerRef.current.offsetLeft)
        setScrollLeft(containerRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return
        e.preventDefault()
        const x = e.pageX - containerRef.current.offsetLeft
        const walk = (x - startX) * 2
        containerRef.current.scrollLeft = scrollLeft - walk
    }

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                overflow: 'hidden',
                cursor: isDragging ? 'grabbing' : 'grab',
                position: 'relative'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div
                ref={trackRef}
                style={{
                    display: 'flex',
                    gap: '1.5rem',
                    userSelect: 'none',
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Carousel
