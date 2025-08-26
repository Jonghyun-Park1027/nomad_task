import { Separator } from "~/common/components/ui/separator";
import { Link } from "react-router";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { BellIcon, LayoutDashboardIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const menus = [
    {
        name : "만세력",
        to : "/products",
        items : [
            {
                name : "만세력 계산기",
                description : "사용자 정보를 입력하고 만세력을 출력하는 서비스",
                to : "/products/manseryuk",
            },
            {
                name : "나의 만세력",
                description : "내 정보 입력으로 생성된 만세력 리스트",
                to : "/products/my-manseryuk",
            },
            {
                name : "categories",
                description : "만세력 카테고리",
                to : "/products/categories",
            },
            {
                name : "search",
                description : "검색",
                to : "/products/search",
            },
            {
                name : "submit",
                description : "만세력 제출",
                to : "/products/submit",
            },
            {
                name : "promote",
                description : "만세력 홍보",
                to : "/products/promote",
            },
            
        ]
    },
    {
        name : "사주 상담",
        to : "/talks",
        items : [
            {
                name : "AI 사주 상담",
                description : "AI 사주 상담",
                to : "/talks",
            },
            {
                name : "나의 사주 상담",
                description : "내 정보 입력으로 생성된 사주 상담 리스트",
                to : "/talks/my-talks",
            },
            {
                name : "Part-time Job",
                description : "Find a remote job in the world",
                to : "/talks?type=part-time",
            },
            {
                name : "Internship",
                description : "Find a remote job in the world",
                to : "/talks?type=internship",
            },
            {
                name : "Freelance",
                description : "Find a remote job in the world",
                to : "/talks?type=freelance",
            },
            {
                name : "Submit a Job",
                description : "Find a remote job in the world",
                to : "/talks/submit",
            },
        ],
    },
    {
        name : "사주 분석",
        to : "/analysis",
        items : [
            {
                name : "AI 사주 분석",
                description : "AI 사주 분석",
                to : "/analysis",
            },
            {
                name : "내 사주 찾기",
                description : "내 사주 찾기",
                to : "/analysis/search",
            },
            {
                name : "Top 사주 분석",
                description : "내 정보 입력으로 생성된 사주 분석 리스트",
                to : "/analysis?sort=top",
            },
            {
                name : "나의 사주 분석",
                description : "내 정보 입력으로 생성된 사주 분석 리스트",
                to : "/analysis?sort=new",
            },
            {
                name : "사주 분석 만들기",
                description : "사주 분석 만들기",
                to : "/analysis/create",
            },
        ],
    },
    {
        name : "IdeaGPT",
        to : "/ideagpt",
    },
    {
        name : "Teams",
        to : "/teams",
        items : [
            {
                name : "All Teams",
                description : "All teams in the community",
                to : "/teams",
            },
            {
                name : "Create a Team",
                description : "Create a team in the community",
                to : "/teams/create",
            },
        ]
    }
]
export default function Navigation({
    isLoggedIn,
    hasNotifications,
    hasMessages,
}: {
    isLoggedIn : boolean,
    hasNotifications : boolean,
    hasMessages : boolean,
}) {
  return (<nav className= "flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
    
    <div className= "flex items-center">
        <Link to="/" className = "font-bold tracking-tighter text-lg">
        사주AI
        </Link>
        <Separator orientation="vertical" className="!h-6 mx-4"/>
        <NavigationMenu>
            <NavigationMenuList>
                {menus.map((menu) => (
                    <NavigationMenuItem key={menu.name}>
                        {menu.items ? (<>
                            <Link to={menu.to}>
                                <NavigationMenuTrigger className = "cursor-pointer">{menu.name}</NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                                <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2 ">
                                {menu.items?.map((item) => (
                                    <NavigationMenuItem key={item.name} className={cn([
                                        "select-none rounded-md",
                                        item.to === "/products/manseryuk" && "col-span-2",
                                        item.to === "/talks" && "col-span-2",
                                        item.to === "/analysis" && "col-span-2",
                                    ])}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                            className={cn([ // conditional classNames
                                                "p-3 space-y-1 block leading-none no-underline outline-none",
                                                item.to === "/products/manseryuk" && "bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                item.to === "/talks" && "bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                item.to === "/analysis" && "bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                            ])}
                                            to={item.to}>
                                                <span className="text-sm text-foreground font-medium leading-none">{item.name}</span>
                                                <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                                </ul>
                            </NavigationMenuContent>
                        </>) : (
                            <Link className={navigationMenuTriggerStyle()} to={menu.to}>{menu.name}</Link>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
    {isLoggedIn ?
    <div className="flex items-center gap-2" >
        <Button size="icon" variant="ghost" className="cursor-pointer relative" asChild> 
            <Link to="/my/notifications">
            <BellIcon className="size-4" />
            {hasNotifications && (
            <div className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full h-2 w-2">
            
            </div>
        )}
        </Link>
        
        </Button>
        <Button size="icon" variant="ghost" className="cursor-pointer relative" asChild> 
            <Link to="/my/messages">
                <MessageCircleIcon className="size-4" />
                {hasMessages && (
                    <div className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full h-2 w-2">
                    </div>
                )}
            </Link>
        </Button>
    <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
            <Avatar>
                <AvatarImage src="https://github.com/Jonghyun-Park1027.png" />
                <AvatarFallback>N</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">My Account</span>
                <span className="text-xs text-muted-foreground">
                    @username
                </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/dashboard">
                    <LayoutDashboardIcon className="size-4 mr-2" />
                    Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/profile">
                    <UserIcon className="size-4 mr-2" />
                    Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/logout">
                    <LogOutIcon className="size-4 mr-2" />
                    Logout</Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    </div> : <div className="flex items-center gap-2">
        <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
        </Button>
        <Button asChild>
            <Link to="/auth/signup">Signup</Link>
        </Button>
    </div>}
  </nav>
  );
}