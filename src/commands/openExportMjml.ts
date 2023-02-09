// @ts-nocheck TODO remove this comment with the next grapesjs release
import type grapesjs from 'grapesjs';
import { cmdGetMjml, cmdGetMjmlToHtml } from '.';
import { RequiredPluginOptions } from '..';
export default (editor: grapesjs.Editor, opts: RequiredPluginOptions, cmdId: string) => {
  const { Commands } = editor;

  Commands.add(cmdId, {
    createCodeEditor(label: string) {
      const el = document.createElement('div');
      const elLabel = document.createElement('div');
      const codeEditor = this.createCodeViewer();

      elLabel.innerHTML = label;
      el.style.flex = '1 0 auto';
      el.style.padding = '5px';
      el.style.maxWidth = '50%';
      el.style.boxSizing = 'border-box';
      el.appendChild(elLabel);
      el.appendChild(codeEditor.getElement());

      return { codeEditor, el };
    },

    createCodeViewer(): any {
      // @ts-ignore
      return editor.CodeManager.createViewer({
        codeName: 'htmlmixed',
        theme: opts.codeViewerTheme,
      });
    },

    getCodeContainer(): HTMLDivElement {
      let containerEl = this.containerEl as HTMLDivElement;

      if (!containerEl) {
        containerEl = document.createElement('div');

        // send email
        const btnSend = document.createElement('button');
        btnSend.innerHTML = "Share code";
        btnSend.classList.add("sendbtn");
        containerEl.appendChild(btnSend);

        // save template
        const saveTemplate = document.createElement('button');
        saveTemplate.innerHTML = "Save Template";
        containerEl.appendChild(saveTemplate);
        saveTemplate.classList.add("saveTemplate");

        // style
        containerEl.style.display = 'flex';
        containerEl.style.justifyContent = 'space-between';

        // style - send email
        btnSend.style.cursor = 'pointer';
        btnSend.style.backgroundColor = '#DFAA20';
        btnSend.style.position = 'absolute';
        btnSend.style.right = '0';
        btnSend.style.top = '0';
        btnSend.style.height = '10%';
        btnSend.style.width = '15%';

        // style - save template
        saveTemplate.style.cursor = 'pointer';
        saveTemplate.style.backgroundColor = '#4CAF50';
        this.containerEl = containerEl;
        // send email
        btnSend.addEventListener('click', () => {
          const mjml = Commands.run(cmdGetMjml);
          const subject = "Campaign Code";
          const body = mjml;
          const mailto = `mailto:tejnaren07@gmail.com?subject=${subject}&body=${body}`;
          window.open(mailto);
        });
        saveTemplate.addEventListener('click', () => {
          const mjml = Commands.run(cmdGetMjml);
          var bb = new Blob([mjml ], { type: 'mjml/text' });
          var a = document.createElement('a');
          a.download = 'template.mjml';
          a.href = window.URL.createObjectURL(bb);
          a.click();
        });
        
      }

      return containerEl;
    },

    run(editor, sender) {
      const container = this.getCodeContainer();
      let codeEditorMjml = this.codeEditorMjml as any;
      let codeEditorHtml = this.codeEditorHtml as any;

      if (!codeEditorMjml) {
        const codeViewer = this.createCodeEditor('MJML');
        codeEditorMjml = codeViewer.codeEditor;
        this.codeEditorMjml = codeEditorMjml;
        container.appendChild(codeViewer.el);
      }

      if (!codeEditorHtml) {
        const codeViewer = this.createCodeEditor('HTML');
        codeEditorHtml = codeViewer.codeEditor;
        this.codeEditorHtml = codeEditorHtml;
        container.appendChild(codeViewer.el);
      }

      editor.Modal
        .open({
          title: editor.I18n.t('grapesjs-mjml.panels.export.title'),
          content: container
        })
        .onceClose(() => {
          sender.set && sender.set('active', false);
          editor.stopCommand(cmdId)
        })

      if (codeEditorMjml) {
        codeEditorMjml.setContent(Commands.run(cmdGetMjml));
        codeEditorMjml.editor.refresh();
      }

      if (codeEditorHtml) {
        const mjmlResult = Commands.run(cmdGetMjmlToHtml);
        mjmlResult.errors?.forEach((error: any) => {
          editor.log(error.formattedMessage, {
            ns: cmdGetMjmlToHtml,
            level: 'warning',
            // @ts-ignore
            error,
          });
        });
        codeEditorHtml.setContent(mjmlResult.html);
        codeEditorHtml.editor.refresh();
      }
    },

    stop(editor) {
      editor.Modal.close();
    },
  });
};
