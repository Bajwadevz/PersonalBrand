const tools = ["HubSpot", "Xero", "MYOB", "Salesforce", "Gmail", "Outlook", "Make", "n8n", "Zapier", "ServiceM8"];

/**
 * Plain-text tool names (not logos) in a slow marquee. Without motion the
 * list simply wraps and the duplicate track is hidden.
 */
export default function ToolsStrip() {
  return (
    <section className="home-tools" aria-labelledby="home-tools-heading">
      <div className="agency-wrap home-tools-inner">
        <h2 id="home-tools-heading" className="home-tools-heading">Works with the tools you already use</h2>
        <div className="home-tools-viewport" data-ambient>
          <div className="home-tools-track">
            <ul className="home-tools-list">{tools.map(t => <li key={t}>{t}</li>)}</ul>
            <ul className="home-tools-list home-tools-dupe" aria-hidden="true">{tools.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
        <p className="home-tools-note">Examples of tools we commonly connect. Tool names belong to their owners; no partnership implied.</p>
      </div>
    </section>
  );
}
