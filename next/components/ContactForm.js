'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Erreur lors de l\'envoi');

            setSubmitStatus({
                type: 'success',
                message: 'Message envoyé avec succès !'
            });
            setFormData({ nom: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Une erreur est survenue. Veuillez réessayer.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
        setSubmitStatus({ type: '', message: '' });
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Votre Nom"
                value={formData.nom}
                onChange={(e) => handleInputChange(e, 'nom')}
                required
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded focus:outline-none focus:border-white"
            />
            <input
                type="email"
                placeholder="Votre Email"
                value={formData.email}
                onChange={(e) => handleInputChange(e, 'email')}
                required
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded focus:outline-none focus:border-white"
            />
            <textarea
                placeholder="Votre Message"
                value={formData.message}
                onChange={(e) => handleInputChange(e, 'message')}
                required
                rows={4}
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded focus:outline-none focus:border-white"
            ></textarea>
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#b1976b] text-white px-8 py-3 rounded hover:bg-[#a08555] transition-colors duration-200 disabled:opacity-50"
            >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {submitStatus.message && (
                <div className={`text-sm ${submitStatus.type === 'success' ? 'text-[#b1976b]' : 'text-[#b1976b]'}`}>
                    {submitStatus.message}
                </div>
            )}
        </form>
    );
} 