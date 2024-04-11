export class Container {
  options: {};

  constructor(additionalOptions?: {}) {
    this.options = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      width: 'calc(100% - 50px)',
      height: 'calc(100% - 50px)',
      borderRadius: '30px',
      padding: '50px',
      ...additionalOptions,
    };
  }
}
