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
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="rides">Поиск поездок</TabsTrigger>
            <TabsTrigger value="drivers">Попутчики</TabsTrigger>
            <TabsTrigger value="create">Создать поездку</TabsTrigger>
            <TabsTrigger value="profile">Мой профиль</TabsTrigger>
            <TabsTrigger value="admin">Админ-панель</TabsTrigger>
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

          {/* Admin Panel */}
          <TabsContent value="admin" className="space-y-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Settings" className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-gray-900">Админ-панель</h2>
                </div>
                <Badge variant="outline" className="px-3 py-1">
                  <Icon name="Shield" className="h-4 w-4 mr-2" />
                  Администратор
                </Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Route Management */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Route" className="h-5 w-5 text-primary" />
                      <span>Управление маршрутами</span>
                    </CardTitle>
                    <CardDescription>
                      Добавляйте и редактируйте популярные маршруты
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">Откуда</label>
                          <Input placeholder="Оренбург" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Куда</label>
                          <Input placeholder="Москва" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">Расстояние (км)</label>
                          <Input placeholder="1200" type="number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Время в пути</label>
                          <Input placeholder="14ч 30м" />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">Базовая цена</label>
                          <Input placeholder="2500" type="number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Комиссия (%)</label>
                          <Input placeholder="10" type="number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Статус</label>
                          <Select defaultValue="active">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Активный</SelectItem>
                              <SelectItem value="inactive">Неактивный</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Icon name="Plus" className="mr-2 h-4 w-4" />
                        Добавить маршрут
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Price Management */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="DollarSign" className="h-5 w-5 text-primary" />
                      <span>Управление ценами</span>
                    </CardTitle>
                    <CardDescription>
                      Настройка тарифов и коэффициентов
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Выберите маршрут</label>
                        <Select defaultValue="orenburg-moscow">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="orenburg-moscow">Оренбург → Москва</SelectItem>
                            <SelectItem value="orenburg-samara">Оренбург → Самара</SelectItem>
                            <SelectItem value="buzuluk-orenburg">Бузулук → Оренбург</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                        <h4 className="font-medium text-primary">Текущие тарифы</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Базовая цена:</span>
                            <div className="font-semibold">2500₽</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Комиссия сервиса:</span>
                            <div className="font-semibold">250₽ (10%)</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Итого для пассажира:</span>
                            <div className="font-semibold text-primary">2750₽</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Получит водитель:</span>
                            <div className="font-semibold text-green-600">2500₽</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">Новая цена</label>
                          <Input placeholder="2500" type="number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Коэффициент спроса</label>
                          <Select defaultValue="1.0">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0.8">0.8 (низкий спрос)</SelectItem>
                              <SelectItem value="1.0">1.0 (обычный)</SelectItem>
                              <SelectItem value="1.2">1.2 (высокий спрос)</SelectItem>
                              <SelectItem value="1.5">1.5 (пиковый спрос)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
                        Обновить цены
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Routes Table */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Table" className="h-5 w-5 text-primary" />
                    <span>Список маршрутов</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Маршрут</th>
                          <th className="text-left py-3 px-2">Расстояние</th>
                          <th className="text-left py-3 px-2">Базовая цена</th>
                          <th className="text-left py-3 px-2">Комиссия</th>
                          <th className="text-left py-3 px-2">Поездки</th>
                          <th className="text-left py-3 px-2">Статус</th>
                          <th className="text-left py-3 px-2">Действия</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2">
                            <div className="font-medium">Оренбург → Москва</div>
                            <div className="text-sm text-gray-500">Популярный маршрут</div>
                          </td>
                          <td className="py-3 px-2">1200 км</td>
                          <td className="py-3 px-2">2500₽</td>
                          <td className="py-3 px-2">10%</td>
                          <td className="py-3 px-2">
                            <span className="text-green-600 font-medium">47</span>
                            <span className="text-gray-500 text-sm ml-1">в этом месяце</span>
                          </td>
                          <td className="py-3 px-2">
                            <Badge className="bg-green-100 text-green-800">Активный</Badge>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Edit" className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <Icon name="Trash" className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2">
                            <div className="font-medium">Оренбург → Самара</div>
                            <div className="text-sm text-gray-500">Региональный</div>
                          </td>
                          <td className="py-3 px-2">280 км</td>
                          <td className="py-3 px-2">800₽</td>
                          <td className="py-3 px-2">8%</td>
                          <td className="py-3 px-2">
                            <span className="text-green-600 font-medium">23</span>
                            <span className="text-gray-500 text-sm ml-1">в этом месяце</span>
                          </td>
                          <td className="py-3 px-2">
                            <Badge className="bg-green-100 text-green-800">Активный</Badge>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Edit" className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <Icon name="Trash" className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2">
                            <div className="font-medium">Бузулук → Оренбург</div>
                            <div className="text-sm text-gray-500">Местный</div>
                          </td>
                          <td className="py-3 px-2">95 км</td>
                          <td className="py-3 px-2">300₽</td>
                          <td className="py-3 px-2">5%</td>
                          <td className="py-3 px-2">
                            <span className="text-yellow-600 font-medium">8</span>
                            <span className="text-gray-500 text-sm ml-1">в этом месяце</span>
                          </td>
                          <td className="py-3 px-2">
                            <Badge className="bg-yellow-100 text-yellow-800">Низкий спрос</Badge>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Edit" className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                <Icon name="Trash" className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Route" className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">127</div>
                    <div className="text-sm text-gray-600">Активных маршрутов</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Car" className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">1,438</div>
                    <div className="text-sm text-gray-600">Поездок в месяц</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="DollarSign" className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-600">₽486k</div>
                    <div className="text-sm text-gray-600">Оборот в месяц</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="TrendingUp" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">+23%</div>
                    <div className="text-sm text-gray-600">Рост к прошлому месяцу</div>
                  </CardContent>
                </Card>
              </div>
            </div>
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