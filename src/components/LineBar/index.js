import React from 'react';

const LineBar = ({
					 label,
					 today,
					 total,
					 labelFontWeight,
					 labelFontSize,
					 labelColor,
					 weekTotalText,
					 weekTotalFontWeight,
					 weekTotalFontSize,
					 weekTotalColor,
					 todayText,
					 todayFontWeight,
					 todayFontSize,
					 todayColor,
					 startColor,
					 endColor
				 }) => {
	// Розрахунок відсотка для прогрес-бара
	const percentage = (today / total) * 100;

	// Створюємо градієнт для прогрес-бара
	const gradient = `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`;

	return (
		<div style={{ marginBottom: '20px' }}>
			{/* Верхній текст: Назва бару і загальна кількість тижнів */}
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
				<span style={{ fontWeight: labelFontWeight, fontSize: `${labelFontSize}px`, color: labelColor }}>{label}</span>
				<span style={{ fontWeight: weekTotalFontWeight, fontSize: `${weekTotalFontSize}px`, color: weekTotalColor }}>
          {weekTotalText} {total}
        </span>
			</div>

			{/* Прогрес-бар */}
			<div style={{ position: 'relative', height: '24px', backgroundColor: '#e0e0e0', borderRadius: '6px', overflow: 'hidden' }}>
				<div style={{
					width: `${percentage}%`,
					height: '100%',
					background: gradient,
					borderRadius: '6px',
					transition: 'width 0.5s ease'
				}}>
				</div>

				{/* Текст "Today" */}
				<span style={{
					position: 'absolute',
					right: '8px',
					top: '50%',
					transform: 'translateY(-50%)',
					color: todayColor,
					fontSize: `${todayFontSize}px`,
					fontWeight: todayFontWeight,
					padding: '0 8px',
					background: 'rgba(0, 0, 0, 0.2)',
					borderRadius: '6px',
					whiteSpace: 'nowrap'
				}}>
          {todayText} {today}
        </span>
			</div>
		</div>
	);
};

export default LineBar;
