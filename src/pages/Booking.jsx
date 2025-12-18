import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../components/Preloader'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function Booking() {
  const [selectedTime, setSelectedTime] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [tables, setTables] = useState([])
  const [loadingTables, setLoadingTables] = useState(true)
  const formRef = useRef(null)

  const API_BASE = "http://127.0.0.1:8000/api"

  const timeSlots = [
    '08:00','09:00','10:00','11:00','12:00',
    '13:00','14:00','17:00','18:00','19:00','20:00','21:00'
  ]

  // Scroll header effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('[data-header]')
      if (!header) return
      
      if (window.scrollY >= 100) header.classList.add('active')
      else header.classList.remove('active')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set date default = tomorrow
  useEffect(() => {
    const dateInput = document.getElementById('date')
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0]
      dateInput.min = today
      
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      dateInput.value = tomorrow.toISOString().split('T')[0]
    }
  }, [])

  // Load tables from Laravel API
  useEffect(() => {
    const loadTables = async () => {
      try {
        setLoadingTables(true)
        const res = await fetch(`${API_BASE}/tables`)
        const data = await res.json()

        if (data.success) setTables(data.tables)
        else setTables([])

      } catch (err) {
        console.error("Error load tables:", err)
        setTables([])
      } finally {
        setLoadingTables(false)
      }
    }

    loadTables()
  }, [])

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time)
  }

  // Submit reservation
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedTime) {
      alert("Vui lòng chọn khung giờ!")
      return
    }

    const formData = {
      fullname: e.target.fullname.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      guests: e.target.guests.value,
      date: e.target.date.value,
      time: selectedTime,
      table_id: e.target.table_id.value,
      notes: e.target.notes.value
    }

    try {
      const res = await fetch(`${API_BASE}/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setShowModal(true)
        formRef.current?.reset()
        setSelectedTime("")

        // Reset date to tomorrow
        const input = document.getElementById("date")
        if (input) {
          const tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          input.value = tomorrow.toISOString().split('T')[0]
        }

      } else {
        alert(data.message || "Đặt bàn thất bại")
      }

    } catch (err) {
      console.error("Booking error:", err)
      alert("Không thể đặt bàn. Vui lòng thử lại.")
    }
  }

  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />

      <section className="booking-section">
        <div className="container">

          {/* Header */}
          <div className="booking-header">
            <p className="section-subtitle label-2">Đặt Bàn Ngay</p>
            <h1 className="section-title headline-1">Trải Nghiệm Ẩm Thực Đẳng Cấp</h1>
            <p className="section-text body-2">
              Hãy điền thông tin để đặt bàn tại The Crown Restaurant.
            </p>
          </div>

          {/* Booking Card */}
          <div className="booking-card">
            <form ref={formRef} id="bookingForm" onSubmit={handleSubmit}>
              <div className="form-grid">

                <div className="form-group">
                  <label className="form-label label-1">Họ và Tên *</label>
                  <input type="text" name="fullname" className="input-field" required />
                </div>

                <div className="form-group">
                  <label className="form-label label-1">Số Điện Thoại *</label>
                  <input type="tel" name="phone" className="input-field" required />
                </div>

                <div className="form-group">
                  <label className="form-label label-1">Email</label>
                  <input type="email" name="email" className="input-field" />
                </div>

                <div className="form-group">
                  <label className="form-label label-1">Số Khách *</label>
                  <select name="guests" className="select-field" required>
                    <option value="">Chọn số khách</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>{num} người</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label label-1">Ngày Đặt Bàn *</label>
                  <input type="date" id="date" name="date" className="input-field" required />
                </div>

                {/* Time Slots */}
                <div className="form-group full-width">
                  <label className="form-label label-1">Khung Giờ *</label>
                  <div className="time-slots">
                    {timeSlots.map(time => (
                      <button
                        type="button"
                        key={time}
                        className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => handleTimeSlotClick(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table Selection */}
                <div className="form-group full-width">
                  <label className="form-label label-1">Chọn Bàn *</label>
                  <select name="table_id" className="select-field" required>
                    {loadingTables ? (
                      <option>Đang tải bàn...</option>
                    ) : (
                      <>
                        <option value="">Chọn bàn</option>
                        {tables.map(t => (
                          <option 
                            key={t.id} 
                            value={t.id}
                            disabled={t.status === "reserved"}
                          >
                            {t.name} - {t.area} ({t.seats} chỗ)
                            {t.status === "reserved" ? " (Đã đặt)" : ""}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label label-1">Ghi Chú</label>
                  <textarea name="notes" className="textarea-field" />
                </div>

              </div>

              <button type="submit" className="btn btn-primary">
                <span className="text text-1">Xác Nhận Đặt Bàn</span>
              </button>
            </form>

            <div className="contact-info">
              <h3 className="title-2">Hoặc liên hệ trực tiếp</h3>
              <div className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+842828282828">028 2828 2828</a>
              </div>
              <div className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:booking@thecrown.com">booking@thecrown.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success Modal */}
      <div 
        className={`modal ${showModal ? 'show' : ''}`} 
        id="successModal"
        onClick={(e) => e.target.id === 'successModal' && setShowModal(false)}
      >
        <div className="modal-content">
          <h2 className="title-1">✨ Đặt Bàn Thành Công!</h2>
          <p className="body-2">Chúng tôi đã nhận được yêu cầu đặt bàn của bạn.</p>
          <button className="modal-btn" onClick={() => setShowModal(false)}>Đóng</button>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Booking
