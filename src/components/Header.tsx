import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="group flex items-center">
          <img 
            src="./images/LogoVN_withoutbackground.png" 
            alt="Vẫn Ngon Logo" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            Cách thức hoạt động
          </a>
          <a href="#browse" className="text-muted-foreground hover:text-foreground transition-colors">
            Khám phá ưu đãi
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Tại sao chọn Vẫn Ngon?
          </a>
        </nav>

        <Button
          variant="default"
          size="sm"
          onClick={() =>
            toast({
              title: "Chưa có - Sắp ra mắt",
              description: "Chúng tôi đang phát triển ứng dụng và sẽ cập nhật sớm.",
            })
          }
        >
          Tải ứng dụng
        </Button>
      </div>
    </header>
  );
};

export default Header;
