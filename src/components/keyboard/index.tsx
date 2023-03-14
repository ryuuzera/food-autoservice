import { useRef, useState } from 'react';
import Keyboard, { KeyboardReactInterface } from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IconContext } from 'react-icons';

export const Keypad = ({ setInputValue, visible, setVisible }: any) => {
  const keyboardRef = useRef<KeyboardReactInterface | null>(null);
  const [input, setInput] = useState('');

  const layoutNames: any = {
    alt: 'alt',
    shift: 'shift',
    default: 'default',
    smileys: 'smileys',
  };

  const [layout, setLayout] = useState({
    name: 'default',
    prev: 'default',
  });

  const onChange = (input: any) => {
    setInput(input)
  };

  const onKeyPress = (button: any) => {
    if (button.includes('enter')) {
      setInputValue(input);
      setInput('')
      setVisible(false);
    }
    const layoutName = layoutNames[button];
    if (layoutName) {
      setLayout((prevState) => {
        if (prevState.name === layoutName) {
          return { name: prevState.prev, prev: layoutName };
        } else {
          return { name: layoutName, prev: prevState.name };
        }
      });
    }
  };

  return (
    <>
      <div className='container'>
        <div className='backButton' onClick={() => { setVisible(false)
        setInput('') }}>
          <IconContext.Provider value={{ size: '32px', color: '#8b8a8a87'}}>
          <IoMdArrowRoundBack/>
          </IconContext.Provider>
          
          </div>
        <input autoComplete='off' value={input} placeholder='tap on the virtual keyboard'></input>
        <Keyboard
          keyboardRef={(r: any) => (keyboardRef.current = r)}
          layoutName={layout.name}
          onChange={onChange}
          onKeyPress={onKeyPress}
          theme={'hg-theme-default hg-theme-ios'}
          layout={{
            default: [
              'q w e r t y u i o p {bksp}',
              'a s d f g h j k l {enter}',
              '{shift} z x c v b n m , . {shift}',
              '{alt} {smileys} {space} {altright} {downkeyboard}',
            ],
            shift: [
              'Q W E R T Y U I O P {bksp}',
              'A S D F G H J K L {enter}',
              '{shiftactivated} Z X C V B N M , . {shiftactivated}',
              '{alt} {smileys} {space} {altright} {downkeyboard}',
            ],
            alt: [
              '1 2 3 4 5 6 7 8 9 0 {bksp}',
              `@ # $ & * ( ) ' " {enter}`,
              '{shift} % - + = / ; : ! ? {shift}',
              '{default} {smileys} {space} {back} {downkeyboard}',
            ],
            smileys: [
              '😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}',
              `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
              '😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}',
              '{default} {smileys} {space} {altright} {downkeyboard}',
            ],
          }}
          display={{
            ['{alt}']: '.?123',
            ['{smileys}']: '\uD83D\uDE03',
            ['{shift}']: '⇧',
            ['{shiftactivated}']: '⇧',
            ['{enter}']: 'confirm',
            ['{bksp}']: '⌫',
            ['{altright}']: '.?123',
            ['{downkeyboard}']: '🞃',
            ['{space}']: ' ',
            ['{default}']: 'ABC',
            ['{back}']: '⇦',
          }}
          buttonTheme={[
            {
              class: 'hg-red',
              buttons: 'space',
            },
          ]}
        />
      </div>
      <style jsx global>{`
        .simple-keyboard.hg-theme-ios {
          max-width: 1080px;
          margin: auto;
          position: absolute;
          z-index: 11;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-row .hg-button {
          flex-grow: 1;
          cursor: pointer;
          max-width: initial;
        }
        .simple-keyboard.hg-theme-ios .hg-row {
          display: flex;
        }
        .simple-keyboard.hg-theme-ios .hg-row:not(:last-child) {
          margin-bottom: 5px;
        }
        .simple-keyboard.hg-theme-ios .hg-row .hg-button:not(:last-child) {
          margin-right: 5px;
        }
        .simple-keyboard.hg-theme-ios .hg-row:nth-child(2) {
          margin-left: 18px;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 5px;
          border-radius: 5px;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default.hg-layout-custom {
          background-color: #e5e5e5;
          padding: 5px;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-red {
          background: rgb(255, 37, 37, 0.3);
          color: white;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button {
          border-radius: 5px;
          box-sizing: border-box;
          padding: 0;
          background: white;
          border-bottom: 1px solid #b5b5b5;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none;
          font-weight: 500;
          font-size: 24px;
          max-width: 60px;
          min-width: 60px;
          height: 60px;
          min-height: 60px;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button:active,
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button:focus {
          background: #e4e4e4;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-functionBtn {
          background-color: #f7ce6f;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-space,
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-shift,
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-shiftactivated {
          background-color: #ffffff;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-space {
          max-width: 448px;
          min-width: 448px;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-enter {
          max-width: 110px;
          min-width: 110px;
        }
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-altright,
        .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-back {
          min-width: 80px;
          max-width: 80px;
        }
      `}</style>
      <style jsx>{`
        .container {
          position: absolute;
          max-width: 1080px;
          height: 100%;
          width: 100%;
          background: rgb(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          left: 50%;
          top: 0;
          border-radius: ${visible ? '0px' : '100%'};
          transform: translateX(-50%) ${visible ? 'scale(1)' : 'scale(0)'};
          transition: all 0.2s linear;
          display: flex;
          justify-content: center;
        }
        input {
          position: relative;
          left: 0;
          top: calc(60% - 190px);
          max-width: 1020px;
          width: calc(100% - 60px);
          font-size: 24px;
          background-color: #eeeeee;
          border: 1px solid rgb(199, 199, 199);
          border-radius: 8px;
          box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
          padding: 12px 20px;
          height: 30px;
        }
        input:focus {
          outline: none;
        }
        .backButton { 
          width: 50px;
          height: 50px;
          position: absolute;
          left: 10px;
          {/* top: calc(60% - 260px); */}
          top: 10px;
          background: #ffffff96;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
          cursor: pointer;
        }
        .backButton:hover {
          background: #ffffffbe;
        }
      `}</style>
    </>
  );
};
