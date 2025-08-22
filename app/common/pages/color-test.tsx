export default function ColorTest() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">OKLCH 색상 테스트</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Primary 색상</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded border"></div>
              <div>
                <p className="text-sm font-mono">bg-primary</p>
                <p className="text-xs text-muted-foreground">oklch(0.637 0.237 25.331)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 rounded border"></div>
              <div>
                <p className="text-sm font-mono">bg-primary/10</p>
                <p className="text-xs text-muted-foreground">10% 투명도</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-primary/20 rounded border"></div>
              <div>
                <p className="text-sm font-mono">bg-primary/20</p>
                <p className="text-xs text-muted-foreground">20% 투명도</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">다른 색상들</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-secondary rounded border"></div>
              <div>
                <p className="text-sm font-mono">bg-secondary</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-accent rounded border"></div>
              <div>
                <p className="text-sm font-mono">bg-accent</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-muted rounded border"></div>
              <div>
                <p className="text-sm font-mono">bg-muted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Hover 효과 테스트</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="p-4 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20 rounded border transition-colors">
            Primary Hover
          </button>
          <button className="p-4 bg-accent hover:bg-accent/80 rounded border transition-colors">
            Accent Hover
          </button>
          <button className="p-4 bg-secondary hover:bg-secondary/80 rounded border transition-colors">
            Secondary Hover
          </button>
        </div>
      </div>
    </div>
  );
}
