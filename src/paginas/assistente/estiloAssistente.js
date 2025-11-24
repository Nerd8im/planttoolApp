import { StyleSheet, Platform, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export const estilos = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#f8fdf8',
  },

  // HEADER COM EFEITO GLASS (expo-blur)
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: Platform.OS === 'android' ? 40 : 18,
    backgroundColor: '#3a713e',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.07)',
    overflow: 'hidden',
  },
  glassEffect: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: Platform.OS === 'android' ? 90 : 100,
    zIndex: -1,
  },

  headerContentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 6,
  },

  avatarContainer: {
    width: 46,
    height: 46,
    borderRadius: 25,
    backgroundColor: 'rgba(45,90,66,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(45,90,66,0.25)',
  },

  headerTitle: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: '700',
  },
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#2d5a42',
    marginRight: 5,
  },
  onlineText: {
    color: '#2d5a42',
    fontSize: 12,
    fontWeight: '600',
  },

  // Fundo do chat
  chatBackground: {
    flex: 1,
    backgroundColor: '#e2efd5',
  },

  dateBadgeContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  dateBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  dateBadgeText: {
    color: '#2d5a42',
    fontSize: 12,
    fontWeight: '600',
  },

  messagesList: {
    padding: 20,
    paddingBottom: 26,
    backgroundColor: '#e2efd5',
  },

  // Linha da mensagem
  messageRow: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '100%',
  },
  messageRowUser: {
    justifyContent: 'flex-end',
  },
  messageRowAi: {
    justifyContent: 'flex-start',
  },

  // Balões
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 3,
  },

  messageBubbleUser: {
    backgroundColor: '#d1f4d8',
    borderTopRightRadius: 6,
  },
  messageBubbleAi: {
    backgroundColor: '#e2efd5',
    borderWidth: 1,
    borderColor: '#b2bca7ff',
    borderTopLeftRadius: 6,
  },

  // Setas dos balões
  bubbleArrow: {
    position: 'absolute',
    top: 10,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderBottomWidth: 8,
    borderBottomColor: 'transparent',
  },
  bubbleArrowUser: {
    right: -12,
    borderLeftWidth: 12,
    borderLeftColor: '#d1f4d8',
  },
  bubbleArrowAi: {
    left: -12,
    borderRightWidth: 12,
    borderRightColor: '#ffffff',
  },

  // Mensagens
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  textUser: {
    color: '#064e2d',
  },
  textAi: {
    color: '#2a2a2a',
  },
  messageTime: {
    fontSize: 11,
    marginTop: 6,
    textAlign: 'right',
  },
  timeUser: {
    color: '#166534',
  },
  timeAi: {
    color: '#999',
  },

  // Imagens enviadas
  messageImageContainer: {
    marginBottom: 8,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  messageImage: {
    width: Math.min(width * 0.7, 260),
    height: Math.min(width * 0.5, 200),
    resizeMode: 'cover',
  },

  // Indicador "digitando"
  typingContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 14,
  },
  typingBubble: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 14,
    borderTopLeftRadius: 6,
  },

  // Área de Input (com Glass)
  inputArea: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
  },

  inputControls: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    backgroundColor: '#e2efd5'
  },

  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#e5e5e5',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  clipButton: {
    padding: 6,
    marginRight: 8,
  },

  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#1a1a1a',
    maxHeight: 140,
  },

  // BOTÃO ENVIAR COM GRADIENTE REAL
  sendButton: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#3a713e',
  },

  sendButtonActive: {},
  sendButtonDisabled: {
    backgroundColor: '#cccccc',
  },

  // Pré-visualização de imagem
  previewContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewImage: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 12,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  previewSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  closeButton: {
    padding: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 16,
  },
});