import WaitlistForm from "./WaitlistForm";

export default function DigitalProduct() {
    return (
        <section className="py-32 flex flex-col items-start w-full border-t border-gray-200/50">
            <div className="w-full bg-white border border-gray-100 p-10 sm:p-14 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-3xl font-semibold tracking-tight text-[#0F172A] mb-3">Join the AI Operators List</h3>
                <p className="text-gray-500 mb-10 text-lg">
                    A playbook and system for execution-focused professionals. Launching soon.
                </p>

                <div className="w-full max-w-sm flex flex-col gap-3">
                    <WaitlistForm />
                </div>

                <p className="mt-4 text-xs text-muted-foreground/70">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}
