import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedGame, setSelectedGame] = useState('all');
  const [cartCount, setCartCount] = useState(0);

  const games = [
    { id: 'csgo', name: 'CS:GO', icon: '🎯' },
    { id: 'dota2', name: 'Dota 2', icon: '⚔️' },
    { id: 'valorant', name: 'Valorant', icon: '🔫' },
    { id: 'rust', name: 'Rust', icon: '🔨' },
  ];

  const featuredSkins = [
    {
      id: 1,
      name: 'AK-47 | Neon Revolution',
      game: 'csgo',
      price: 1299,
      discount: 15,
      image: 'https://cdn.poehali.dev/projects/2da35b11-a96e-434f-a014-ea7946189bc9/files/052747ad-1dbb-4ba5-b01e-df55c33126e4.jpg',
      verified: true,
      rarity: 'Legendary'
    },
    {
      id: 2,
      name: 'Phantom | Celestial',
      game: 'valorant',
      price: 2499,
      discount: 20,
      image: 'https://cdn.poehali.dev/projects/2da35b11-a96e-434f-a014-ea7946189bc9/files/5730c3a2-0e6f-47c9-b09e-1876f89f2936.jpg',
      verified: true,
      rarity: 'Mythic'
    },
    {
      id: 3,
      name: 'Arcana | Purple Void',
      game: 'dota2',
      price: 3499,
      discount: 10,
      image: 'https://cdn.poehali.dev/projects/2da35b11-a96e-434f-a014-ea7946189bc9/files/85eb8f72-1ec8-4f35-a1a9-9b1cc603bc94.jpg',
      verified: true,
      rarity: 'Arcana'
    },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const filteredSkins = selectedGame === 'all' 
    ? featuredSkins 
    : featuredSkins.filter(skin => skin.game === selectedGame);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-green to-neon-blue flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h1 className="text-2xl font-rajdhani font-bold bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
                SKINMARKET
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground/80 hover:text-neon-green transition-colors">Каталог</a>
              <a href="#" className="text-foreground/80 hover:text-neon-green transition-colors">Продать</a>
              <a href="#" className="text-foreground/80 hover:text-neon-green transition-colors">Помощь</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative hover:bg-neon-green/10 hover:text-neon-green">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-pink rounded-full text-xs flex items-center justify-center animate-glow-pulse">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neon-blue/10 hover:text-neon-blue">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-pink/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50 hover:bg-neon-green/30">
              🔥 Скидки до 50% на эту неделю
            </Badge>
            <h2 className="text-5xl md:text-7xl font-rajdhani font-bold leading-tight">
              Легендарные скины
              <br />
              <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
                по низу рынка
              </span>
            </h2>
            <p className="text-xl text-foreground/70">
              Проверенные продавцы • Безопасные сделки • Мгновенная доставка
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-neon-green hover:bg-neon-green/90 text-background font-rajdhani font-bold text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Найти скин
              </Button>
              <Button size="lg" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-rajdhani font-bold text-lg">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Популярное
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedGame === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedGame('all')}
              className={selectedGame === 'all' ? 'bg-neon-green text-background hover:bg-neon-green/90' : 'hover:border-neon-green/50 hover:text-neon-green'}
            >
              Все игры
            </Button>
            {games.map((game) => (
              <Button
                key={game.id}
                variant={selectedGame === game.id ? 'default' : 'outline'}
                onClick={() => setSelectedGame(game.id)}
                className={selectedGame === game.id ? 'bg-neon-green text-background hover:bg-neon-green/90' : 'hover:border-neon-green/50 hover:text-neon-green'}
              >
                <span className="mr-2">{game.icon}</span>
                {game.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-rajdhani font-bold">
              Топовые предложения
            </h3>
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Поиск скинов..." 
                className="w-64 bg-card border-border/50 focus:border-neon-green"
              />
              <Button variant="outline" size="icon" className="hover:border-neon-green/50 hover:text-neon-green">
                <Icon name="SlidersHorizontal" size={20} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkins.map((skin) => (
              <Card 
                key={skin.id} 
                className="group overflow-hidden bg-card/50 border-border/50 hover:border-neon-green/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={skin.image} 
                      alt={skin.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    {skin.discount > 0 && (
                      <Badge className="absolute top-4 right-4 bg-neon-pink text-white border-0">
                        -{skin.discount}%
                      </Badge>
                    )}
                    {skin.verified && (
                      <Badge className="absolute top-4 left-4 bg-neon-blue/90 text-white border-0">
                        <Icon name="ShieldCheck" size={14} className="mr-1" />
                        Проверен
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2 border-neon-purple/50 text-neon-purple">
                        {skin.rarity}
                      </Badge>
                      <h4 className="text-xl font-rajdhani font-bold group-hover:text-neon-green transition-colors">
                        {skin.name}
                      </h4>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        {skin.discount > 0 && (
                          <p className="text-sm text-foreground/50 line-through">
                            {skin.price}₽
                          </p>
                        )}
                        <p className="text-2xl font-rajdhani font-bold text-neon-green">
                          {Math.round(skin.price * (1 - skin.discount / 100))}₽
                        </p>
                      </div>
                      <Button 
                        onClick={addToCart}
                        className="bg-neon-green hover:bg-neon-green/90 text-background"
                      >
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-neon-green/20 flex items-center justify-center">
                <Icon name="ShieldCheck" size={32} className="text-neon-green" />
              </div>
              <h4 className="text-xl font-rajdhani font-bold">Проверенные продавцы</h4>
              <p className="text-foreground/70">Все продавцы проходят верификацию</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-neon-blue/20 flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-neon-blue" />
              </div>
              <h4 className="text-xl font-rajdhani font-bold">Мгновенная доставка</h4>
              <p className="text-foreground/70">Получайте скины за секунды</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-neon-pink/20 flex items-center justify-center">
                <Icon name="Lock" size={32} className="text-neon-pink" />
              </div>
              <h4 className="text-xl font-rajdhani font-bold">Безопасные сделки</h4>
              <p className="text-foreground/70">Защита покупателя и продавца</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-green to-neon-blue flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <span className="font-rajdhani font-bold text-xl">SKINMARKET</span>
            </div>
            <p className="text-foreground/50">© 2024 SkinMarket. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-neon-green">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-blue">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
