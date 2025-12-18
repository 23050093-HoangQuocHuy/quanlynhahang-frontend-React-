import Preloader from '../components/Preloader'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const chefs = [
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.bAT6yO9qdpCqgfsRRXwEzAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Gordon Ramsay',
    position: 'Bếp Trưởng',
    description: 'Nổi tiếng với: Nhà hàng The Crown Restaurant, chương trình Hell\'s Kitchen và MasterChef.\n\nPhong cách: Ẩm thực châu Âu hiện đại, đặc biệt là món Anh – Pháp cao cấp.',
    specialty: 'Ẩm thực Pháp, Nhật Bản & Fusion'
  },
  {
    image: 'https://blogs-images.forbes.com/nargessbanks/files/2017/03/1.-Massimo-Bottura-1200x801.jpg',
    name: 'Massimo Bottura',
    position: 'Phó Bếp Trưởng',
    description: 'Nhà hàng: The Crown Restaurant — từng đứng số 1 thế giới (The World\'s 50 Best Restaurants).\n\nPhong cách: Ẩm thực Ý sáng tạo, kết hợp nghệ thuật và triết lý.',
    specialty: 'Hải sản & Ẩm thực Địa Trung Hải'
  },
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.AXpL1--p7CxU0pEFHN7qRgHaEs?rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Heston Blumenthal',
    position: 'Phó Bếp Trưởng',
    description: 'Nhà hàng: The Crown Restaurant\n\nPhong cách: Ẩm thực phân tử (molecular gastronomy), nổi tiếng với những món ăn kết hợp khoa học và trải nghiệm giác quan.',
    specialty: 'Wagyu & Ẩm thực Nướng'
  },
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.gL8ebU1w7XDRe4AXOy8OAQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Nobuyuki "Nobu" Matsuhisa',
    position: 'Bếp Trưởng',
    description: 'Nhà hàng: The Crown Restaurant\n\nPhong cách: Kết hợp ẩm thực Nhật truyền thống với hương vị Nam Mỹ.',
    specialty: 'Bánh Ngọt & Tráng Miệng'
  }
]

function Chef() {
  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />
      
      <main>
        <article>
          {/* CHEF HERO SECTION */}
          <section className="hero text-center" style={{ paddingBlock: '150px 100px', minHeight: '60vh' }}>
            <div className="container">
              <p className="section-subtitle label-2">Đội Ngũ Chuyên Nghiệp</p>
              <h1 className="display-1 hero-title">Đầu Bếp Của Chúng Tôi</h1>
              <p className="body-2" style={{ maxWidth: '600px', marginInline: 'auto', marginBlockStart: '20px' }}>
                Gặp gỡ những bậc thầy ẩm thực đứng sau những món ăn tuyệt vời tại The Crown Restaurant
              </p>
            </div>
          </section>

          {/* CHEF TEAM SECTION */}
          <section className="section" style={{ paddingBlock: '70px' }}>
            <div className="container">
              <div className="grid-list" style={{ gap: '60px' }}>
                {chefs.map((chef, index) => (
                  <div key={index} className="feature-card" style={{ textAlign: 'center', padding: '40px 30px' }}>
                    <div style={{
                      width: '200px',
                      height: '200px',
                      marginInline: 'auto',
                      marginBlockEnd: '30px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      backgroundColor: 'var(--eerie-black-4)'
                    }}>
                      <img
                        src={chef.image}
                        width="200"
                        height="200"
                        alt={`Chef ${chef.name}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <h3 className="title-2" style={{ color: 'var(--gold-crayola)', marginBlockEnd: '10px' }}>
                      {chef.name}
                    </h3>
                    <p className="label-1" style={{ color: 'var(--quick-silver)', marginBlockEnd: '20px' }}>
                      {chef.position}
                    </p>

                    <p className="body-4" style={{ color: 'var(--quick-silver)', lineHeight: 1.8 }}>
                      {chef.description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < chef.description.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>

                    <div style={{ marginBlockStart: '25px' }}>
                      <p className="label-2" style={{ color: 'var(--gold-crayola)' }}>Chuyên môn:</p>
                      <p className="body-4" style={{ color: 'var(--white)' }}>{chef.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Philosophy Section */}
              <div style={{ marginBlockStart: '100px', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
                <p className="section-subtitle label-2">Triết Lý Ẩm Thực</p>
                <h2 className="headline-1 section-title">Đam Mê & Sáng Tạo</h2>
                <p className="body-4" style={{ color: 'var(--quick-silver)', lineHeight: 1.8, marginBlockStart: '30px' }}>
                  Tại The Crown Restaurant, đội ngũ đầu bếp của chúng tôi tin rằng ẩm thực không chỉ là nghệ
                  thuật mà còn là cách để kết nối con người. Chúng tôi luôn tìm kiếm những nguyên liệu tươi
                  ngon nhất, kết hợp kỹ thuật truyền thống với sự sáng tạo hiện đại để mang đến những trải
                  nghiệm ẩm thực độc đáo và khó quên.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Chef

