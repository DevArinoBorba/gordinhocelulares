/**
 * B2B FORM HANDLER — GRUPO GORDINHO
 * Permite envio direto formatado para WhatsApp ou endpoint configurável (ex: Formspree / Resend).
 * 
 * ⚠️ ATENÇÃO PARA O CLIENTE / DESENVOLVEDOR:
 * O e-mail oficial e endpoint de recebimento do formulário ainda estão como [PENDENTE DE CONFIRMAÇÃO].
 * Você pode configurar o endpoint no objeto CONFIG_B2B abaixo ou manter o despacho direto para o WhatsApp.
 */

const CONFIG_B2B = {
  // Substitua pela URL do seu serviço de e-mail (ex: https://formspree.io/f/SEU_ID) quando o e-mail for confirmado
  formEndpoint: 'https://formspree.io/f/[PENDENTE_DE_CONFIRMACAO]',
  // Link oficial do WhatsApp de Personalizados B2B
  whatsappBaseUrl: 'https://wa.me/message/Y65VYC3IEKBXA1'
};

document.addEventListener('DOMContentLoaded', () => {
  initB2BForm();
  initFileUploadHelper();
});

function initB2BForm() {
  const form = document.getElementById('b2bQuoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('b2bName').value.trim();
    const company = document.getElementById('b2bCompany').value.trim();
    const phone = document.getElementById('b2bPhone').value.trim();
    const projectType = document.getElementById('b2bProjectType').value;
    const description = document.getElementById('b2bDescription').value.trim();
    const fileInput = document.getElementById('b2bFiles');
    const filesCount = fileInput && fileInput.files ? fileInput.files.length : 0;

    // Monta texto estruturado
    let text = `*SOLICITAÇÃO DE ORÇAMENTO B2B — GRUPO GORDINHO*\n\n`;
    text += `👤 *Nome:* ${name}\n`;
    if (company) text += `🏢 *Empresa:* ${company}\n`;
    text += `📱 *Telefone/WhatsApp:* ${phone}\n`;
    text += `🎯 *Tipo de Projeto:* ${projectType}\n`;
    text += `📝 *Descrição:* ${description}\n`;
    if (filesCount > 0) {
      text += `📎 *Anexos:* ${filesCount} arquivo(s) preparado(s) para envio nesta conversa.\n`;
    }

    const encodedText = encodeURIComponent(text);
    const destinationUrl = `${CONFIG_B2B.whatsappBaseUrl}?text=${encodedText}`;

    // Exibe feedback visual de envio
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Abrindo WhatsApp com sua proposta... ⏳</span>';

    setTimeout(() => {
      window.open(destinationUrl, '_blank');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Solicitação Pronta! Abrir Novamente ↗</span>';

      const feedbackBox = document.getElementById('b2bFeedback');
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
      }
    }, 600);
  });
}

function initFileUploadHelper() {
  const fileInput = document.getElementById('b2bFiles');
  const fileListLabel = document.getElementById('b2bFilesLabel');
  const dropBox = document.querySelector('.file-upload-box');

  if (!fileInput || !fileListLabel) return;

  fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files.length > 0) {
      const names = Array.from(fileInput.files).map(f => f.name).join(', ');
      fileListLabel.innerHTML = `<strong>✅ ${fileInput.files.length} arquivo(s) selecionado(s):</strong><br><span style="font-size: 0.75rem; color: #CBD5E1;">${names}</span>`;
      if (dropBox) dropBox.style.borderColor = 'var(--color-primary)';
    } else {
      fileListLabel.innerHTML = `Clique ou arraste fotos, plantas ou referências (PNG, JPG, PDF)`;
      if (dropBox) dropBox.style.borderColor = 'var(--border-color)';
    }
  });

  if (dropBox) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropBox.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropBox.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropBox.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropBox.classList.remove('dragover');
      }, false);
    });
  }
}
