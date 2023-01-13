import Media from 'react-media';
export const MediaComp = ({ device, children }) => {
  return (
    <Media
      queries={{
        mob: 'min-width: 480px',
        tab: 'min-width: 768px',
        desc: 'min-width: 1200px',
      }}
    >
      {matches => matches[device] && children}
    </Media>
  );
};
