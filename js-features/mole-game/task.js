(() => {
    let playing = true,
      activeHole = 1,
      deadCount = 0,
      lostCount = 0;
  
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
  
    const stop = () => playing = false,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole(index).className = 'hole',
      activateHole = index =>
        getHole(index).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);
  
    const checkVictory = () => {
      if (deadCount >= 10) {
        alert('Вы победили!');
        resetGame();
      }
      if (lostCount >= 5) {
        alert('Игра окончена!');
        resetGame();
      }
    };
  
    const resetGame = () => {
      deadCount = 0;
      lostCount = 0;
      dead.textContent = 0;
      lost.textContent = 0;
    };
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
          deadCount++;
          dead.textContent = deadCount;
        } else {
          lostCount++;
          lost.textContent = lostCount;
        }
        checkVictory();
      };
    }
  
    next();
  })();
