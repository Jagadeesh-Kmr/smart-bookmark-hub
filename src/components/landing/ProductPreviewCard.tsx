import { Globe, Trash2, Plus, ExternalLink } from "lucide-react";

const bookmarks = [
  { title: "React Documentation", url: "react.dev", fav: "⚛️" },
  { title: "Tailwind CSS", url: "tailwindcss.com", fav: "🎨" },
  { title: "Linear — Project Tracking", url: "linear.app", fav: "🔮" },
  { title: "Vercel Dashboard", url: "vercel.com", fav: "▲" },
];

const ProductPreviewCard = () => {
  return (
    <div className="bg-hero-card border border-hero rounded-2xl overflow-hidden glow">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-hero">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(0 84% 60% / 0.7)" }} />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45 93% 47% / 0.7)" }} />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142 71% 45% / 0.7)" }} />
        </div>
        <span className="text-xs text-hero-muted ml-2 font-medium">SmartMark — Dashboard</span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 flex items-center gap-2 bg-hero border border-hero rounded-xl px-4 py-2.5">
            <Plus className="h-4 w-4 text-hero-muted" />
            <span className="text-sm text-hero-muted">Add a bookmark URL...</span>
          </div>
          <button className="bg-gradient-brand text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-xl">
            Save
          </button>
        </div>

        <div className="space-y-2">
          {bookmarks.map((b) => (
            <div
              key={b.title}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-hero/50 transition-colors group"
            >
              <span className="text-lg">{b.fav}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-hero truncate">{b.title}</p>
                <p className="text-xs text-hero-muted flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  {b.url}
                </p>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 rounded-lg hover:bg-hero-card transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 text-hero-muted" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-red-500/10 transition-colors">
                  <Trash2 className="h-3.5 w-3.5 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
