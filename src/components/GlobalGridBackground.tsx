export default function GlobalGridBackground() {
    return (
        <div
            className="fixed inset-0 w-[100vw] h-[100vh] z-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.025) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                backgroundPosition: 'center top'
            }}
        ></div>
    );
}
