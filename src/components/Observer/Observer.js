// @flow
import React from 'react';
import { observe, unobserve, destroy } from './utils';

type Props = {|
  triggerOnce?: boolean,
  threshold?: number | Array<number>,
  root?: HTMLElement,
  rootMargin?: string,
  className?: string,
  observerId?: string,
  render: boolean => React$Node
|};

type State = {|
  inView: boolean
|};

class Observer extends React.Component<Props, State> {
  observerNode: ?HTMLElement;

  isInViewPort: boolean => void;

  static defaultProps = {
    threshold: 0.1,
    rootMargin: '10px 0px -64px 0px',
    triggerOnce: false,
    observerId: 'intersectionObserver'
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      inView: false
    };
  }

  componentDidMount() {
    if (this.observerNode) {
      const { threshold, root, rootMargin, observerId } = this.props;
      const config = {
        threshold,
        root,
        rootMargin
      };
      observe(
        this.observerNode,
        config,
        observerId || 'intersectionObserver',
        this.isInViewPort
      );
    }
  }

  componentWillUnmount() {
    destroy();
  }

  isInViewPort = (inView: boolean) => {
    const { triggerOnce } = this.props;
    this.setState({ inView });
    if (inView && triggerOnce && this.observerNode) {
      unobserve(this.observerNode);
    }
  };

  render() {
    const { inView } = this.state;
    const {
      className,
      render,
      triggerOnce,
      threshold,
      root,
      rootMargin,
      observerId,
      ...restProps
    } = this.props;

    return (
      <div
        ref={(observerNode: ?HTMLElement) => {
          this.observerNode = observerNode;
        }}
        className={className}
        {...restProps}
      >
        {render(inView)}
      </div>
    );
  }
}

export default Observer;
