# silvaguedes-site — www.silvaguedes.com

Site público estático (GitHub Pages) do casamento de Luana & Paulo.

- **/savethedate/** — Save the Date (envelope animado + mensagem + página de endereço).
- **/** — redireciona para `/savethedate/`.

Domínio: `www.silvaguedes.com` (arquivo `CNAME`). Sem etapa de build — publicar = `git push`.

> Observação: a página de endereço (`/savethedate/Endereco.dc.html`) coleta dados
> do convidado, mas só os envia se um `submitUrl` (endpoint de backend) for
> configurado no componente. Sem isso, o formulário mostra "Obrigado!" sem salvar.
