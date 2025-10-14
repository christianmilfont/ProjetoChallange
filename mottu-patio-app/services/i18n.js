import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Importa os arquivos de tradução
import pt from '../locales/PT.json';
import es from '../locales/ES.json';

// Define os idiomas disponíveis
i18n.translations = {
  pt,
  es,
};

// Define o idioma padrão (fallback)
i18n.fallbacks = true;

// Define o idioma atual com base no sistema do usuário
i18n.locale = Localization.locale.startsWith('es')
  ? 'es'
  : 'pt'; // Se não for espanhol, usa português como padrão

export default i18n;
