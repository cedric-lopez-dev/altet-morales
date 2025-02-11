'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
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
      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>

            <div className="mb-12 w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.4824143509385!2d2.8912899!3d42.6012299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e26d9c2b9e9%3A0x5cb498e5fa6d8f6a!2s3%20Pl.%20de%20Catalogne%2C%2066000%20Perpignan!5e0!3m2!1sfr!2sfr!4v1710337221813!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-[#FF7BE5] mr-4" />
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p>3 Place de Catalogne</p>
                      <p>66000 Perpignan</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#FF7BE5] mr-4" />
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p>04 68 51 00 19</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#FF7BE5] mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:ampr@orange.fr" className="hover:text-[#FF7BE5]">
                        ampr@orange.fr
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                    <p>Lundi - Vendredi</p>
                    <p className="text-[#FF7BE5]">9:00 - 12:00 | 14:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange(e, 'nom')}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF7BE5]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF7BE5]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Votre téléphone"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange(e, 'telephone')}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF7BE5]"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Sujet"
                      value={formData.sujet}
                      onChange={(e) => handleInputChange(e, 'sujet')}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF7BE5]"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={(e) => handleInputChange(e, 'message')}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF7BE5]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF7BE5] text-white px-6 py-3 rounded hover:bg-[#FFA4ED] transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>

                  {submitStatus.message && (
                    <div className={`text-sm ${submitStatus.type === 'success' ? 'text-[#FF7BE5]' : 'text-red-600'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 