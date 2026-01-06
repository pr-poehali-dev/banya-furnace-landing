import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [saunaVolume, setSaunaVolume] = useState([20]);
  const [insulationType, setInsulationType] = useState('standard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const calculatePower = () => {
    const baseMultiplier = insulationType === 'good' ? 0.8 : insulationType === 'excellent' ? 0.6 : 1;
    return Math.ceil(saunaVolume[0] * baseMultiplier);
  };

  const recommendedModel = () => {
    const power = calculatePower();
    if (power <= 9) return { name: 'БП-Комфорт 9', power: '9 кВт', volume: '8-12 м³' };
    if (power <= 15) return { name: 'БП-Премиум 15', power: '15 кВт', volume: '12-20 м³' };
    return { name: 'БП-Максимум 24', power: '24 кВт', volume: '20-32 м³' };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setName('');
    setPhone('');
    setEmail('');
  };

  const stoveFeatures = [
    {
      title: 'Топка',
      icon: 'Flame',
      specs: ['Толщина стали 8 мм', 'Объём 60 л', 'Футеровка шамотом'],
      position: 'top-[45%] left-[15%]',
    },
    {
      title: 'Каменка',
      icon: 'Mountain',
      specs: ['Вместимость 80 кг', 'Камни габбро-диабаз', 'Быстрый нагрев'],
      position: 'top-[25%] left-[45%]',
    },
    {
      title: 'Теплообменник',
      icon: 'Waves',
      specs: ['Нержавеющая сталь', 'КПД 85%', 'Прогрев за 40 мин'],
      position: 'top-[50%] right-[20%]',
    },
    {
      title: 'Дымоход',
      icon: 'Wind',
      specs: ['Диаметр 115 мм', 'Двухконтурный', 'Защита от искр'],
      position: 'top-[10%] right-[35%]',
    },
  ];

  const models = [
    {
      name: 'БП-Комфорт 9',
      power: '9 кВт',
      volume: '8-12 м³',
      price: '42 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5707e070-c436-46d7-8bde-dbcdb0809544/files/4c901d6b-b0c7-4240-88cd-6ac057df3326.jpg',
    },
    {
      name: 'БП-Премиум 15',
      power: '15 кВт',
      volume: '12-20 м³',
      price: '58 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5707e070-c436-46d7-8bde-dbcdb0809544/files/4c901d6b-b0c7-4240-88cd-6ac057df3326.jpg',
    },
    {
      name: 'БП-Максимум 24',
      power: '24 кВт',
      volume: '20-32 м³',
      price: '78 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5707e070-c436-46d7-8bde-dbcdb0809544/files/4c901d6b-b0c7-4240-88cd-6ac057df3326.jpg',
    },
  ];

  const specs = [
    { label: 'Материал топки', value: 'Сталь 8 мм', icon: 'Shield' },
    { label: 'Тип нагрева', value: 'Конвекционный', icon: 'Flame' },
    { label: 'Вес камней', value: 'До 80 кг', icon: 'Weight' },
    { label: 'КПД', value: '85%', icon: 'TrendingUp' },
    { label: 'Время прогрева', value: '40-60 мин', icon: 'Clock' },
    { label: 'Гарантия', value: '3 года', icon: 'Award' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-foreground flex items-center gap-2 text-xl">Жарница</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#specs" className="text-sm font-medium hover:text-primary transition-colors">
              Характеристики
            </a>
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">
              Калькулятор
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Галерея
            </a>
            <a href="#order" className="text-sm font-medium hover:text-primary transition-colors">
              Заказать
            </a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Премиум качество
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Банные печи нового поколения
              </h2>
              <p className="text-lg text-muted-foreground">
                Инженерная точность в каждой детали. КПД 85%, быстрый прогрев, долговечность от 15 лет.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Подобрать печь
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={18} className="mr-2" />
                  Видео о производстве
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border p-8">
                <img
                  src="https://cdn.poehali.dev/projects/5707e070-c436-46d7-8bde-dbcdb0809544/files/61cf6e94-bb54-4616-adc5-26933e8801bc.jpg"
                  alt="Схема печи в разрезе"
                  className="w-full h-full object-contain"
                />
                {stoveFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${feature.position} group cursor-pointer`}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <Card className="absolute left-10 top-0 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-base">
                            <Icon name={feature.icon as any} size={18} className="text-primary" />
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {feature.specs.map((spec, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Технические характеристики
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Спецификации премиум-класса</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый параметр разработан для максимальной эффективности и безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={spec.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-xl font-semibold">{spec.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Калькулятор подбора
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Подберите оптимальную модель</h2>
              <p className="text-muted-foreground">
                Укажите параметры вашей бани, и мы порекомендуем идеальную печь
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-8">
                <div>
                  <Label className="text-base mb-4 block">Объём парилки: {saunaVolume[0]} м³</Label>
                  <Slider
                    value={saunaVolume}
                    onValueChange={setSaunaVolume}
                    min={5}
                    max={40}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 м³</span>
                    <span>40 м³</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base mb-4 block">Уровень утепления</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'standard', label: 'Стандарт', multiplier: '×1.0' },
                      { value: 'good', label: 'Хорошее', multiplier: '×0.8' },
                      { value: 'excellent', label: 'Отличное', multiplier: '×0.6' },
                    ].map((type) => (
                      <Button
                        key={type.value}
                        variant={insulationType === type.value ? 'default' : 'outline'}
                        onClick={() => setInsulationType(type.value)}
                        className="flex flex-col h-auto py-4"
                      >
                        <span className="font-semibold">{type.label}</span>
                        <span className="text-xs opacity-70">{type.multiplier}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lightbulb" className="text-primary" />
                      Рекомендуемая модель
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-2xl font-bold">{recommendedModel().name}</p>
                        <p className="text-muted-foreground">Расчётная мощность: {calculatePower()} кВт</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Мощность:</span>
                          <span className="ml-2 font-semibold">{recommendedModel().power}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Объём:</span>
                          <span className="ml-2 font-semibold">{recommendedModel().volume}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Заказать эту модель
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Наши модели
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея печей</h2>
            <p className="text-muted-foreground">Выберите модель, которая подходит именно вам</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{model.name}</span>
                    <Badge variant="secondary">{model.price}</Badge>
                  </CardTitle>
                  <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Zap" size={14} />
                      {model.power}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Maximize" size={14} />
                      {model.volume}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full group/btn">
                    Подробнее
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Оформить заказ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-muted-foreground mb-6">
                  Оставьте заявку, и наш специалист свяжется с вами для консультации и расчёта стоимости
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес производства</p>
                      <p className="text-sm text-muted-foreground">г. Москва, ул. Промышленная, 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">info@banpech.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Форма заказа</CardTitle>
                  <CardDescription>Заполните данные для консультации</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Icon name="Flame" className="text-primary" />
                БанПечь
              </h3>
              <p className="text-sm text-muted-foreground">
                Производство банных печей премиум-класса с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Печи для бани
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Дымоходы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@banpech.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 БанПечь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;