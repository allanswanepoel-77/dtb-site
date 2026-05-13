const GOOGLE_DRIVE_LINK =
  "https://drive.google.com/drive/folders/1jW0Ja_M7FdZNGLhV71yn9rVhabaewdUg?usp=sharing";

export default function Member() {
  return (
    <div
      data-ms-content="jump-start-program"
      className="min-h-screen bg-slate-950 text-white p-10"
    >
      <h1 className="text-5xl font-bold">DTB Traders Member Area</h1>

      <p className="mt-4 text-white/70">
        Welcome to the DTB Traders member dashboard.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 max-w-2xl">
        <h2 className="text-2xl font-bold">Jump Start Program</h2>

        <p className="mt-3 text-white/70">
          Access your Jump Start Program files, setup resources, and member
          materials below.
        </p>

        <a
          href={GOOGLE_DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-fit rounded-xl bg-dtb px-6 py-3 font-semibold hover:bg-dtb-hover"
        >
          Open Jump Start Program Files
        </a>
      </div>
    </div>
  );
}