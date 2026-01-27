import { Leaf, Carrot, Beef, Apple, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Vẫn Ngon</span>
            </a>
            <p className="text-sm text-background/70 hidden md:block">Cùng tham gia phong trào chống lãng phí thực phẩm.</p>
             <div className="flex items-center gap-2">
                  <Carrot className="w-5 h-5" />
                  <Beef className="w-5 h-5" />
                  <Apple className="w-5 h-5" />
                  <Cookie className="w-5 h-5" />
                </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-background/80 mb-1">
              <strong>Bạn là chủ/ quản lý quán?</strong>
            </p>
            <p className="text-xs text-background/60 mb-2">
              Chúng tôi hợp tác với các doanh nghiệp.
            </p>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors text-sm font-medium"
            >
              Liên hệ
            </Link>
          </div>

          {/* Social icons removed per request to simplify footer */}
        </div>

        <div className="pt-6 border-t border-background/10 mt-6">
          <p className="text-sm text-background/60">© 2026 Vẫn Ngon. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
