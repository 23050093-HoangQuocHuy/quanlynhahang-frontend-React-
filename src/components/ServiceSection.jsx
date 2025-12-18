import { Link } from 'react-router-dom'

function ServiceSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Hương vị dành cho hoàng gia</p>

        <h2 className="headline-1 section-title">Chúng tôi cung cấp dịch vụ hàng đầu</h2>

        <p className="section-text">
          Với tinh hoa ẩm thực được chế biến từ những nguyên liệu thượng hạng,
          chúng tôi mang đến cho thực khách trải nghiệm ẩm thực hoàn hảo, từ hương vị
          tinh tế đến phong cách phục vụ tận tâm. The Crown Restaurant là điểm đến lý
          tưởng cho những ai tìm kiếm sự khác biệt và đẳng cấp.
        </p>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <a href="#menu" className="has-before hover:shine" onClick={(e) => {
                e.preventDefault()
                scrollToMenu()
              }} aria-label="Xem thực đơn bữa sáng">
                <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                  <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=285&h=336&fit=crop&q=80" width="285" height="336" loading="lazy" alt="Bữa sáng cao cấp" className="img-cover" />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#menu" onClick={(e) => {
                    e.preventDefault()
                    scrollToMenu()
                  }} aria-label="Xem thực đơn bữa sáng">Bữa sáng</a>
                </h3>
                <a href="#menu" className="btn-text hover-underline label-2" onClick={(e) => {
                  e.preventDefault()
                  scrollToMenu()
                }} aria-label="Xem thực đơn">Xem thực đơn</a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="#menu" className="has-before hover:shine" onClick={(e) => {
                e.preventDefault()
                scrollToMenu()
              }} aria-label="Xem thực đơn chính">
                <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=285&h=336&fit=crop&q=80" width="285" height="336" loading="lazy" alt="Thực đơn chính" className="img-cover" />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#menu" onClick={(e) => {
                    e.preventDefault()
                    scrollToMenu()
                  }} aria-label="Xem thực đơn chính">Thực đơn chính</a>
                </h3>
                <a href="#menu" className="btn-text hover-underline label-2" onClick={(e) => {
                  e.preventDefault()
                  scrollToMenu()
                }} aria-label="Xem thực đơn">Xem thực đơn</a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="#menu" className="has-before hover:shine" onClick={(e) => {
                e.preventDefault()
                scrollToMenu()
              }} aria-label="Xem thực đơn thức uống">
                <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                  <img src="https://vinmec-prod.s3.amazonaws.com/images/20200525_074537_841661_rv.max-1800x1800.jpg" width="285" height="336" loading="lazy" alt="Thức uống đa dạng" className="img-cover" />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#menu" onClick={(e) => {
                    e.preventDefault()
                    scrollToMenu()
                  }} aria-label="Xem thực đơn thức uống">Thức uống</a>
                </h3>
                <a href="#menu" className="btn-text hover-underline label-2" onClick={(e) => {
                  e.preventDefault()
                  scrollToMenu()
                }} aria-label="Xem thực đơn">Xem thực đơn</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ServiceSection

