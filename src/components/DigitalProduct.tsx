import WaitlistForm from "./WaitlistForm";

export default function DigitalProduct() {
    return (
        <section className="py-16 flex flex-col items-start w-full border-t border-muted">
            <div className="w-full bg-muted/30 border border-muted p-8 sm:p-12 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-2xl font-semibold tracking-tight mb-2">Join the AI Builder List</h3>
                <p className="text-muted-foreground mb-8 text-base">
                    A playbook and system for execution-focused developers. Launching soon.
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
