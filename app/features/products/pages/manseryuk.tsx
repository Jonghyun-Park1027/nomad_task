import type { Route } from "./+types/manseryuk";
import { HeroHeader } from "../../../common/components/hero";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";


export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta : Route.MetaFunction = () => {
  return [
    { title: "Product | Manseryuk" },
    { name: "description", content: "Explore Manseryuk products" }
  ];
}

export default function ManseryukPage() {
  return (
    <div className="space-y-40">
      <HeroHeader 
        title="Manseryuk"
        description="Manseryuk is a platform for buying and selling products."
      />
    <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold">만세력 계산기 일간 랭킹</h2>
          <p className="text-xl font-light text-foreground">만세력 계산기 일간 랭킹입니다.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk/daily">
              모든 대화 보기 &rarr;
            </Link>
          </Button>
        </div>
        
          { Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
            productId="productId"
            title="만세력 계산기"
            description="만세력 계산 서비스"
            conversationCount={12}
            viewCount={12}
            upvoteCount={120}
          />
          ))}
          
            <Button variant="link" className="text-lg p-0 self-center" asChild>
              <Link to="/products/manseryuk/daily">
                모든 대화 보기 &rarr;
              </Link>  
            </Button>
          
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold">만세력 계산기 주간 랭킹</h2>
          <p className="text-xl font-light text-foreground">만세력 계산기 주간 랭킹입니다.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk/weekly">
              모든 대화 보기 &rarr;
            </Link>
          </Button>
        </div>
        
          { Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
            productId="productId"
            title="만세력 계산기"
            description="만세력 계산 서비스"
            conversationCount={12}
            viewCount={12}
            upvoteCount={120}
          />
          ))}
          
            <Button variant="link" className="text-lg p-0 self-center" asChild>
              <Link to="/products/manseryuk/weekly">
                모든 대화 보기 &rarr;
              </Link>  
            </Button>
          
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold">만세력 계산기 월간 랭킹</h2>
          <p className="text-xl font-light text-foreground">만세력 계산기 월간 랭킹입니다.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk/monthly">
              모든 대화 보기 &rarr;
            </Link>
          </Button>
        </div>
        
          { Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
            productId="productId"
            title="만세력 계산기"
            description="만세력 계산 서비스"
            conversationCount={12}
            viewCount={12}
            upvoteCount={120}
          />
          ))}
          
            <Button variant="link" className="text-lg p-0 self-center" asChild>
              <Link to="/products/manseryuk/monthly">
                모든 대화 보기 &rarr;
              </Link>  
            </Button>
          
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold">만세력 계산기 연간 랭킹</h2>
          <p className="text-xl font-light text-foreground">만세력 계산기 연간 랭킹입니다.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk/yearly">
              모든 대화 보기 &rarr;
            </Link>
          </Button>
        </div>
        
          { Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
            productId="productId"
            title="만세력 계산기"
            description="만세력 계산 서비스"
            conversationCount={12}
            viewCount={12}
            upvoteCount={120}
          />
          ))}
          
            <Button variant="link" className="text-lg p-0 self-center" asChild>
              <Link to="/products/manseryuk/yearly">
                모든 대화 보기 &rarr;
              </Link>  
            </Button>
          
      </div>
    </div> 
  )
}
