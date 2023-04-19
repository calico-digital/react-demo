export default function Header() {
    return (
        <header className="bg-green-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" class="text-2xl font-bold">My website</a>

                <nav>
                    <a href="/" class="mx-2 hover:underline hover:text-opacity-70 hover:text-emerald-50 transition-all">Home</a>
                    <a href="/about" class="mx-2 hover:underline hover:text-opacity-70 hover:text-emerald-50 transition-all">About</a>
                    <a href="/pokemons" class="mx-2 hover:underline hover:text-opacity-70 hover:text-emerald-50 transition-all">Pokemons</a>
                </nav>
            </div>
        </header>
    );
}