const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
            <p>Proximo post em</p>
            <span>${minutes}:${seconds}</span>
        `;
  },
};


export { View };
