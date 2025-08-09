export default function App() {
  const wrap = {
    maxWidth: 960,
    margin: "60px auto",
    padding: "0 20px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    lineHeight: 1.5,
  };
  const h1 = { fontSize: 40, margin: "0 0 12px" };
  const p = { color: "#555", margin: "0 0 24px" };
  const card = { border: "1px solid #eee", borderRadius: 12, padding: 20 };

  return (
    <main style={wrap}>
      <h1 style={h1}>Wallpaper Hub</h1>
      <p style={p}>Deployed on Vercel. Replace this later with your gallery.</p>

      <section style={card}>
        <p>If you still see the Vite starter after this commit, you are on the wrong URL or the wrong repo.</p>
      </section>
    </main>
  );
}
