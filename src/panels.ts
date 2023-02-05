// @ts-nocheck TODO remove this comment with the next grapesjs release
import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '.';
import {
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdImportMjml,
  cmdSaveMjml,
} from './commands';

export default (editor: grapesjs.Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor;
  const iconStyle = 'style="display: block; max-width:22px"';

  const getI18nLabel = (label: string) => editor.I18n.t(`grapesjs-mjml.panels.buttons.${label}`);


  // Add save button
  Panels.addButton('options', {
    id: 'save-component',
      className: 'btn-save-component',
      label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
      </svg>`,
      context: 'save-component',
      command(editor) {
        editor.Modal.setTitle('Add custom component and save')
          .setContent(`<textarea style="width:100%; height: 300px; background-color: #322931; color:#d5d3d5;"></textarea>
          <button style="background-color: #52ad87; height: 40px; width: 100px; font-size: 16px; cursor: pointer;"><a href="/Users/tejaaswini.narendran/Desktop/rapidus/rapidus/demo/src/components/custom-components" download="cc.mjml">Save</a></button>`)
          .open();
      },})

  // Add save button - templates
  Panels.addButton('options', {
    id: cmdImportMjml,
    command: cmdImportMjml,
    attributes: { title: getI18nLabel('Select Templates') },
    label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </svg>`,
  });


  // Add email
  Panels.addButton('options', {
    id: 'save-email',
      className: 'btn-save-email',
      label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
    </svg>`,
      context: 'save-email',
      command(editor) {
        editor.Modal.setTitle('Add custom component and save')
          .setContent(`<form>
          <div class="form-group">
            <label for="exampleInputEmail1">From</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <label for="exampleInputEmail1">To</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <label for="exampleInputEmail1">Body</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <button style="background-color: #52ad87; height: 40px; width: 100px; font-size: 16px; cursor: pointer;">Send</button>`)
          .open();
      },})

  // Add Import button
  Panels.addButton('options', {
    id: cmdImportMjml,
    command: cmdImportMjml,
    attributes: { title: getI18nLabel('import') },
    label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </svg>`,
  });

  // Add Undo/Redo buttons
  Panels.addButton('options', {
    id: 'undo',
    command: 'core:undo',
    attributes: { title: getI18nLabel('undo') },
    label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
    </svg>`
  });
  Panels.addButton('options', {
    id: 'redo',
    command: 'core:redo',
    attributes: { title: getI18nLabel('redo') },
    label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
    </svg>`,
  });

  // Add wiki button
  Panels.addButton('options', {
    id: 'wiki-component',
      className: 'wiki-save-component',
      label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
          </svg>`,
      context: 'wiki-component',
      command(editor) {
        editor.Modal.setTitle('Add custom component and save')
          .setContent(`<textarea style="width:100%; height: 80px; background-color: #322931; color:#d5d3d5;">

          Want to know more about the product?
          Read our wiki page! :D
          </textarea>
          <a href="https://tejnaren07.gitbook.io/rapidus/"><button style="background-color: #3b9cc4; height: 40px; width: 100px; font-size: 16px; cursor: pointer;">Wiki</button></a>`)
          .open();
      },})

  // Update devices
  if (opts.resetDevices) {
    // Turn off default devices select and create new one
    editor.getConfig().showDevices = false;

    const devicePanel = Panels.addPanel({ id: 'devices-c' });
    const deviceBtns = devicePanel.get('buttons');
    deviceBtns.add([
      {
        id: cmdDeviceDesktop,
        command: cmdDeviceDesktop,
        active: true,
        attributes: { title: getI18nLabel('desktop') },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`,
      }, {
        id: cmdDeviceTablet,
        command: cmdDeviceTablet,
        attributes: { title: getI18nLabel('tablet') },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`,
      }, {
        id: cmdDeviceMobile,
        command: cmdDeviceMobile,
        attributes: { title: getI18nLabel('mobile') },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`,
      }
    ]);
  }
};
