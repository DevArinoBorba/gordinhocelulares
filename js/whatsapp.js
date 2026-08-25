/**
 * CONFIGURAÇÃO DE ATENDIMENTO WHATSAPP & UNIDADE FÍSICA — GRUPO GORDINHO
 * Endereço Único Oficial: Rua Cônego Tomás Fontes, 417 — Centro, Itajaí/SC (CEP 88301-100)
 */

const GRUPO_GORDINHO_STORES = {
  celulares: {
    name: 'Gordinho Celulares',
    tagline: 'Assistência Técnica Especializada e Acessórios',
    phone: '5547996970405',
    formattedPhone: '(47) 99697-0405',
    instagram: '@gordinhocelularoficial',
    instagramUrl: 'https://www.instagram.com/gordinhocelularoficial/',
    address: 'Rua Cônego Tomás Fontes, 417 — Centro, Itajaí/SC (CEP 88301-100)',
    mapsUrl: 'https://maps.google.com/maps?q=Rua%20C%C3%B4nego%20Thomaz%20Fontes%2C%20417%20-%20Centro%2C%20Itaja%C3%AD%20-%20SC',
    defaultMessage: 'Olá! Gostaria de solicitar um orçamento para assistência técnica / acessórios no Gordinho Celulares.',
    getUrl() {
      return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.defaultMessage)}`;
    }
  },
  personalizados: {
    name: 'Gordinho Personalizados',
    tagline: 'Presentes Personalizados B2C e Soluções Corporativas B2B',
    directLink: 'https://wa.me/message/Y65VYC3IEKBXA1',
    instagram: '@gordinhopersonalizadosoficial',
    instagramUrl: 'https://www.instagram.com/gordinhopersonalizadosoficial/',
    address: 'Rua Cônego Tomás Fontes, 417 — Centro, Itajaí/SC (CEP 88301-100)',
    mapsUrl: 'https://maps.google.com/maps?q=Rua%20C%C3%B4nego%20Thomaz%20Fontes%2C%20417%20-%20Centro%2C%20Itaja%C3%AD%20-%20SC',
    defaultMessage: 'Olá! Gostaria de um orçamento para produtos personalizados / comunicação visual no Gordinho Personalizados.',
    getUrl() {
      return this.directLink;
    }
  }
};
