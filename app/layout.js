import "../styles/globals.css";
import Header from "./components/Header/Header";
import Providers from "./components/Providers/Providers";

export default function RootLayout({ children }) {
  return (
    <html>
      
        <body className="bg-gray-200  transition-all duration-700">
          <Header />

          <div className="max-w-6xl mx-auto">{children}</div>
        </body>

    </html>
  );
}
