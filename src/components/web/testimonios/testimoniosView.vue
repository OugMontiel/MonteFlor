<script>
import testimonios from '@/components/web/testimonios/testimonio.js'

export default {
    name: 'TestimoniosView',
    data() {
        return {
            testimonios,
            currentIndex: 0,
            intervalId: null,
            cantidadAMostrar: 2
        }
    },
    computed: {
        grupoTestimonios() {
            return this.testimonios.slice(
                this.currentIndex,
                this.currentIndex + this.cantidadAMostrar
            )
        }
    },
    mounted() {
        this.startAutoSlide()
    },
    beforeUnmount() {
        clearInterval(this.intervalId)
    },
    methods: {
        startAutoSlide() {
            this.intervalId = setInterval(() => {
                this.currentIndex += this.cantidadAMostrar
                if (this.currentIndex >= this.testimonios.length) {
                    this.currentIndex = 0
                }
            }, 10000) // cada 5 segundos
        },
        getStars(rating) {
            return '★'.repeat(rating) + '☆'.repeat(5 - rating)
        }
    }
}
</script>

<template>
    <section class="testimonial-container">
        <div class="testimonial-card" v-for="(t, index) in grupoTestimonios" :key="index">
            <p class="quote">“</p>
            <p class="text">"{{ t.text }}"</p>
            <p class="name">{{ t.name }}</p>
            <p class="stars">{{ getStars(t.rating) }}</p>
        </div>
    </section>
</template>

<style scoped>
.testimonial-container {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
    flex-wrap: wrap;
}

.testimonial-card {
    width: 100%;
    max-width: 500px;
    background: #fff;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(39, 37, 37, 0.305);
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.testimonial-card:hover {
    box-shadow: 0 0 20px rgba(255, 161, 10, 0.886);
    transform: scale(1.05);
}

.quote {
    font-size: 5rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #f6b613;
    text-align: left;
}

.text {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1.5rem;
    font-style: italic;
}

.name {
    font-weight: bold;
    font-size: 23px;
    color: #000;
    margin-bottom: 0.3rem;
}

.stars {
    font-size: 2rem;
    color: #f6b613;
}
</style>
