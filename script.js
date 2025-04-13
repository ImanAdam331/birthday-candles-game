function startGame() {
    const input = document.getElementById('input').value;


    if (!input.trim()) {
      alert('please enter candles hight numbers separated by spaces');
      
      return;
    }

      if (input.trim() == '0') {
        
        alert ("🫠 You can not Enter 0 its already melted!");
         return;

    }


      /* تأكد أن فقط أرقام صحيحة موجودة
  if (!/^\d+(\s+\d+)*$/.test(input.trim())) {
    alert('الرجاء إدخال أرقام صحيحة فقط مفصولة بمسافات (مثل: 3 2 4)');
    return;
  }
    */

  
  
    // نحول النص إلى أرقام
    let heights = input.trim().split(/\s+/).map(Number);
  
    // نرتبها من الأكبر إلى الأصغر
    heights.sort((a, b) => b - a);
  
    // نرسم الشموع
    const container = document.getElementById('candles');
    container.innerHTML = ''; // نفرغ اللي قبل
    heights.forEach(h => {
      const candle = document.createElement('div');
      candle.classList.add('candle');
      candle.dataset.originalHeight = h * 30;
      candle.style.height = `${h * 30}px`;
      container.appendChild(candle);
    });
  
    // نحسب الأطول
    const tallest = heights[0];
    const count = heights.filter(h => h === tallest).length;
  
    // نعرض النتيجة
    document.getElementById('result').innerHTML = `
       Number of tallest candles: ${count}🕯️<br>
      Order from tallest to shortest: ${heights.join(' ')} 🔢
    `;
  }

  function resetGame() {
    document.getElementById('input').value = '';
    document.getElementById('candles').innerHTML = '';
    document.getElementById('result').innerHTML = '';
  }
  

 // منع من كتابة اشياء غير الارقام
  document.getElementById('input').addEventListener('input', function () {
    this.value = this.value.replace(/[^\d\s]/g, ''); // يسمح فقط بالأرقام والمسافات
  });
  
  