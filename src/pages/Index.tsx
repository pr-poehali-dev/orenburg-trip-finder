import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const mockRides = [
    {
      id: 1,
      from: 'Оренбург',
      to: 'Москва',
      date: '15 сентября',
      time: '08:00',
      price: '2500₽',
      driver: 'Алексей К.',
      rating: 4.8,
      seats: 3,
      car: 'Toyota Camry'
    },
    {
      id: 2,
      from: 'Оренбург',
      to: 'Самара',
      date: '16 сентября',
      time: '14:30',
      price: '800₽',
      driver: 'Мария С.',
      rating: 4.9,
      seats: 2,
      car: 'Honda Civic'
    },
    {
      id: 3,
      from: 'Бузулук',
      to: 'Оренбург',
      date: '17 сентября',
      time: '09:15',
      price: '300₽',
      driver: 'Дмитрий П.',
      rating: 4.7,
      seats: 1,
      car: 'Hyundai Solaris'
    }
  ];

  const mockDrivers = [
    { name: 'Алексей К.', rating: 4.8, trips: 127, image: '/placeholder.svg' },
    { name: 'Мария С.', rating: 4.9, trips: 89, image: '/placeholder.svg' },
    { name: 'Дмитрий П.', rating: 4.7, trips: 203, image: '/placeholder.svg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">ПопутчикОРБ</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#search" className="text-gray-600 hover:text-primary transition-colors">Поиск</a>
              <a href="#create" className="text-gray-600 hover:text-primary transition-colors">Создать поездку</a>
              <a href="#profile" className="text-gray-600 hover:text-primary transition-colors">Профиль</a>
              <a href="#safety" className="text-gray-600 hover:text-primary transition-colors">Безопасность</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">
              Найди попутчика в Оренбурге
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Безопасные и комфортные поездки по Оренбургской области. 
              Экономь время и деньги, путешествуя с попутчиками.
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Откуда</label>
                <Input 
                  placeholder="Оренбург" 
                  value={searchFrom}
                  onChange={(e) => setSearchFrom(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Куда</label>
                <Input 
                  placeholder="Москва" 
                  value={searchTo}
                  onChange={(e) => setSearchTo(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Дата</label>
                <Input 
                  type="date" 
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="flex items-end">
                <Button size="lg" className="w-full h-12">
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="rides" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="rides">Поиск поездок</TabsTrigger>
            <TabsTrigger value="drivers">Попутчики</TabsTrigger>
            <TabsTrigger value="create">Создать поездку</TabsTrigger>
            <TabsTrigger value="profile">Мой профиль</TabsTrigger>
            <TabsTrigger value="safety">Безопасность</TabsTrigger>
          </TabsList>

          {/* Available Rides */}
          <TabsContent value="rides" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-900">Доступные поездки</h3>
              <div className="flex space-x-2">
                <Select defaultValue="date">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">По дате</SelectItem>
                    <SelectItem value="price">По цене</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4">
              {mockRides.map((ride) => (
                <Card key={ride.id} className="hover:shadow-lg transition-shadow border-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="MapPin" className="h-5 w-5 text-primary" />
                            <span className="font-semibold">{ride.from}</span>
                          </div>
                          <Icon name="ArrowRight" className="h-5 w-5 text-gray-400" />
                          <div className="flex items-center space-x-2">
                            <Icon name="MapPin" className="h-5 w-5 text-secondary" />
                            <span className="font-semibold">{ride.to}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Icon name="Calendar" className="h-4 w-4" />
                            <span>{ride.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" className="h-4 w-4" />
                            <span>{ride.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Car" className="h-4 w-4" />
                            <span>{ride.car}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" className="h-4 w-4" />
                            <span>{ride.seats} места</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="flex items-center space-x-2 mb-1">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>{ride.driver[0]}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{ride.driver}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">{ride.rating}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-2">{ride.price}</div>
                          <Button size="sm">Забронировать</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Drivers */}
          <TabsContent value="drivers" className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Рейтинг попутчиков</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDrivers.map((driver, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={driver.image} />
                      <AvatarFallback className="text-lg">{driver.name[0]}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-lg mb-2">{driver.name}</h4>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Icon name="Star" className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">{driver.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{driver.trips} поездок</p>
                    <Button variant="outline" size="sm">Посмотреть профиль</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Create Ride */}
          <TabsContent value="create" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Создать объявление о поездке</CardTitle>
                <CardDescription className="text-center">
                  Заполните информацию о вашей поездке
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Откуда</label>
                    <Input placeholder="Оренбург" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Куда</label>
                    <Input placeholder="Москва" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Время</label>
                    <Input type="time" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Цена</label>
                    <Input placeholder="2500₽" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Автомобиль</label>
                    <Input placeholder="Toyota Camry" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Свободных мест</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 место</SelectItem>
                        <SelectItem value="2">2 места</SelectItem>
                        <SelectItem value="3">3 места</SelectItem>
                        <SelectItem value="4">4 места</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                  <Textarea placeholder="Укажите особенности поездки, остановки, условия..." />
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Plus" className="mr-2 h-5 w-5" />
                  Создать объявление
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl">ИП</AvatarFallback>
                </Avatar>
                <CardTitle>Иван Петров</CardTitle>
                <CardDescription>Участник с марта 2023</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">4.8</div>
                    <div className="text-sm text-gray-600">Рейтинг</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">127</div>
                    <div className="text-sm text-gray-600">Поездок</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">89%</div>
                    <div className="text-sm text-gray-600">Одобрений</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Последние отзывы</h4>
                  <div className="space-y-3">
                    {[
                      "Отличный попутчик! Пунктуальный и аккуратный водитель.",
                      "Приятная поездка, хорошая компания в дороге.",
                      "Всё прошло отлично, рекомендую!"
                    ].map((review, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700">{review}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety */}
          <TabsContent value="safety" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                  <span>Правила безопасности и пользования</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Для пассажиров</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Всегда проверяйте рейтинг и отзывы водителя</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Сообщите близким о маршруте и времени поездки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Встречайтесь в публичных местах</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Доверяйте своим инстинктам</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Для водителей</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Поддерживайте автомобиль в исправном состоянии</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Соблюдайте ПДД и скоростной режим</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Будьте пунктуальны</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Подтверждайте поездки заранее</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2 flex items-center">
                    <Icon name="AlertTriangle" className="h-5 w-5 mr-2" />
                    Экстренные контакты
                  </h5>
                  <p className="text-red-700">
                    В случае возникновения проблем или чрезвычайных ситуаций:
                  </p>
                  <div className="mt-2 space-y-1">
                    <p><strong>Служба экстренного реагирования:</strong> 112</p>
                    <p><strong>Поддержка ПопутчикОРБ:</strong> +7 (3532) 123-456</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">ПопутчикОРБ</h3>
              </div>
              <p className="text-gray-400">
                Безопасные поездки по Оренбургской области
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Поиск попутчиков</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Создание поездок</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (3532) 123-456</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@poputchikorb.ru</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>г. Оренбург</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПопутчикОРБ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;