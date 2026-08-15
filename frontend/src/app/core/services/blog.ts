import { Injectable } from '@angular/core';
import { Blog } from '../../../type';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [
    {
      id: '1',
      title: 'بهترین تمرین‌ها برای ساخت عضلات قدرتمند',
      slug: 'best-exercises-for-muscle-growth',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=12',
      date: '2026-08-10',
      summary: 'با بهترین تمرین‌های بدنسازی برای افزایش حجم و قدرت عضلات آشنا شوید.',
      content: `
        تمرین اصولی و منظم یکی از مهم‌ترین عوامل در ساخت عضلات قدرتمند است.
        در این مقاله با تمرین‌هایی آشنا می‌شوید که می‌توانند به افزایش حجم،
        قدرت و استقامت عضلات کمک کنند.
      `,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
      category: 'Workout & Fitness',
      tags: ['بدنسازی', 'عضله سازی', 'تمرین', 'فیتنس'],
      readTime: 6,
      featured: true,
      link: '/blogs/best-exercises-for-muscle-growth'
    },

    {
      id: '2',
      title: 'راهنمای انتخاب کفش مناسب برای ورزش',
      slug: 'how-to-choose-sports-shoes',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=32',
      date: '2026-08-08',
      summary: 'انتخاب کفش مناسب می‌تواند عملکرد ورزشی شما را بهتر و احتمال آسیب‌دیدگی را کمتر کند.',
      content: `
        کفش ورزشی مناسب باید با نوع فعالیت، فرم پا و شرایط تمرینی شما هماهنگ باشد.
        در این راهنما نکات مهمی را بررسی می‌کنیم که قبل از خرید کفش ورزشی باید بدانید.
      `,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      category: 'Buying Guide',
      tags: ['کفش ورزشی', 'خرید', 'دویدن', 'ورزش'],
      readTime: 5,
      featured: true,
      link: '/blogs/how-to-choose-sports-shoes'
    },

    {
      id: '3',
      title: 'پروتئین چیست و چه نقشی در عضله‌سازی دارد؟',
      slug: 'protein-and-muscle-growth',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=47',
      date: '2026-08-05',
      summary: 'پروتئین یکی از مهم‌ترین مواد مغذی برای ریکاوری و رشد عضلات است.',
      content: `
        پروتئین از اسیدهای آمینه تشکیل شده و نقش مهمی در ترمیم و ساخت بافت‌های بدن دارد.
        دریافت مقدار مناسب پروتئین در کنار تمرین منظم می‌تواند به فرایند عضله‌سازی کمک کند.
      `,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports Nutrition',
      tags: ['پروتئین', 'تغذیه', 'عضله سازی', 'بدنسازی'],
      readTime: 7,
      featured: true,
      link: '/blogs/protein-and-muscle-growth'
    },

    {
      id: '4',
      title: 'کراتین چیست؟ بررسی فواید و نحوه مصرف',
      slug: 'creatine-benefits-and-usage',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=11',
      date: '2026-08-02',
      summary: 'همه چیز درباره کراتین، فواید آن و نکاتی که قبل از مصرف باید بدانید.',
      content: `
        کراتین یکی از شناخته‌شده‌ترین مکمل‌های ورزشی است که به‌خصوص در تمرینات
        قدرتی و با شدت بالا مورد توجه قرار گرفته است.
      `,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports Supplements',
      tags: ['کراتین', 'مکمل', 'بدنسازی', 'قدرت'],
      readTime: 8,
      featured: false,
      link: '/blogs/creatine-benefits-and-usage'
    },

    {
      id: '5',
      title: 'چطور یک برنامه تمرینی مناسب شروع کنیم؟',
      slug: 'how-to-start-workout-plan',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=5',
      date: '2026-07-30',
      summary: 'اگر تازه ورزش را شروع کرده‌اید، با این نکات یک برنامه تمرینی اصولی داشته باشید.',
      content: `
        شروع ورزش بدون برنامه مشخص ممکن است باعث کاهش انگیزه یا حتی آسیب‌دیدگی شود.
        در این مقاله مراحل ساخت یک برنامه تمرینی ساده و قابل اجرا را بررسی می‌کنیم.
      `,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      category: 'Workout & Fitness',
      tags: ['برنامه تمرینی', 'فیتنس', 'ورزش', 'مبتدی'],
      readTime: 6,
      featured: false,
      link: '/blogs/how-to-start-workout-plan'
    },

    {
      id: '6',
      title: 'اهمیت آب در عملکرد ورزشی',
      slug: 'importance-of-hydration-in-sports',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=44',
      date: '2026-07-27',
      summary: 'کم‌آبی بدن می‌تواند روی عملکرد ورزشی و ریکاوری تأثیر منفی بگذارد.',
      content: `
        آب نقش مهمی در تنظیم دمای بدن، انتقال مواد مغذی و حفظ عملکرد طبیعی عضلات دارد.
        نوشیدن مایعات کافی یکی از اصول مهم برای ورزشکاران است.
      `,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports & Health',
      tags: ['آب', 'سلامتی', 'ورزش', 'ریکاوری'],
      readTime: 4,
      featured: false,
      link: '/blogs/importance-of-hydration-in-sports'
    },

    {
      id: '7',
      title: 'چگونه تجهیزات ورزشی مناسب خانه انتخاب کنیم؟',
      slug: 'home-gym-equipment-guide',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=15',
      date: '2026-07-24',
      summary: 'برای ساخت یک باشگاه خانگی کاربردی لازم نیست تجهیزات زیادی خریداری کنید.',
      content: `
        با انتخاب چند وسیله کاربردی مانند دمبل، کش‌های مقاومتی و مت می‌توان
        یک فضای تمرینی مناسب در خانه ایجاد کرد.
      `,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports Equipment',
      tags: ['باشگاه خانگی', 'تجهیزات', 'دمبل', 'تمرین'],
      readTime: 5,
      featured: false,
      link: '/blogs/home-gym-equipment-guide'
    },

    {
      id: '8',
      title: 'اشتباهات رایج هنگام خرید مکمل ورزشی',
      slug: 'common-mistakes-buying-supplements',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=8',
      date: '2026-07-20',
      summary: 'قبل از خرید مکمل ورزشی این اشتباهات رایج را بشناسید.',
      content: `
        انتخاب مکمل باید بر اساس نیاز فردی، هدف تمرینی و اطلاعات معتبر انجام شود.
        در این مقاله اشتباهاتی را بررسی می‌کنیم که هنگام خرید مکمل باید از آن‌ها دوری کرد.
      `,
      image: 'https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?auto=format&fit=crop&w=1200&q=80',
      category: 'Buying Guide',
      tags: ['مکمل', 'خرید مکمل', 'بدنسازی', 'راهنمای خرید'],
      readTime: 6,
      featured: false,
      link: '/blogs/common-mistakes-buying-supplements'
    },

    {
      id: '9',
      title: 'تغذیه قبل و بعد از تمرین چه تفاوتی دارد؟',
      slug: 'nutrition-before-and-after-workout',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=20',
      date: '2026-07-17',
      summary: 'با اصول تغذیه قبل و بعد از تمرین برای داشتن عملکرد و ریکاوری بهتر آشنا شوید.',
      content: `
        زمان‌بندی و ترکیب وعده‌های غذایی می‌تواند روی انرژی هنگام تمرین و
        ریکاوری پس از تمرین تأثیر داشته باشد.
      `,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports Nutrition',
      tags: ['تغذیه', 'قبل تمرین', 'بعد تمرین', 'ریکاوری'],
      readTime: 7,
      featured: false,
      link: '/blogs/nutrition-before-and-after-workout'
    },

    {
      id: '10',
      title: 'راهنمای خرید توپ فوتبال برای بازیکنان',
      slug: 'football-buying-guide',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=53',
      date: '2026-07-14',
      summary: 'سایز، جنس و نوع توپ از مهم‌ترین مواردی هستند که هنگام خرید توپ فوتبال باید بررسی کنید.',
      content: `
        توپ مناسب باید متناسب با سن بازیکن، سطح بازی و نوع زمین انتخاب شود.
        در این راهنما مهم‌ترین ویژگی‌های یک توپ فوتبال مناسب را بررسی می‌کنیم.
      `,
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports Equipment',
      tags: ['فوتبال', 'توپ فوتبال', 'تجهیزات', 'راهنمای خرید'],
      readTime: 5,
      featured: false,
      link: '/blogs/football-buying-guide'
    },

    {
      id: '11',
      title: 'تمرینات هوازی چه فوایدی برای بدن دارند؟',
      slug: 'benefits-of-cardio-workouts',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=25',
      date: '2026-07-10',
      summary: 'تمرینات هوازی می‌توانند به بهبود استقامت، سلامت قلب و آمادگی جسمانی کمک کنند.',
      content: `
        فعالیت‌های هوازی مانند دویدن، دوچرخه‌سواری و شنا بخش مهمی از یک سبک زندگی فعال هستند.
        شدت و مدت تمرین باید متناسب با شرایط فردی تنظیم شود.
      `,
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports & Health',
      tags: ['کاردیو', 'دویدن', 'سلامتی', 'استقامت'],
      readTime: 5,
      featured: false,
      link: '/blogs/benefits-of-cardio-workouts'
    },

    {
      id: '12',
      title: '۵ وسیله ضروری برای شروع بدنسازی',
      slug: 'five-essential-gym-equipment',
      author: 'تیم FitMarket',
      authorImage: 'https://i.pravatar.cc/150?img=33',
      date: '2026-07-06',
      summary: 'برای شروع تمرینات بدنسازی با چند وسیله ساده می‌توانید یک تمرین کامل داشته باشید.',
      content: `
        برای شروع بدنسازی نیازی به خرید تمام تجهیزات باشگاه ندارید.
        چند وسیله ساده و کاربردی می‌توانند بخش زیادی از نیازهای تمرینی شما را پوشش دهند.
      `,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
      category: 'Sports Equipment',
      tags: ['بدنسازی', 'تجهیزات', 'دمبل', 'باشگاه'],
      readTime: 4,
      featured: true,
      link: '/blogs/five-essential-gym-equipment'
    }
  ];

  getBlogs(): Promise<Blog[]> {
    return Promise.resolve(this.blogs);
  }
}