import React from 'react';

const LineBar = ({ label, today, total }) => {
	// Розрахунок відсотка (today / total * 100)
	const percentage = (today / total) * 100;

	return (
		<div style={{ marginBottom: '20px' }}>
			{/* Верхній текст із заголовком і "Week Total" */}
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
				<span>{label}</span>
				<span>Week Total {total}</span>
			</div>

			{/* Прогрес-бар */}
			<div style={{ position: 'relative', height: '24px', backgroundColor: '#e0e0e0', borderRadius: '6px', overflow: 'hidden' }}>
				{/* Бар з градієнтом */}
				<div style={{
					width: `${percentage}%`,
					height: '100%',
					background: 'linear-gradient(90deg, #a0c1e8 0%, #628ac5 100%)',
					borderRadius: '6px',
					transition: 'width 0.5s ease',
					position: 'relative'
				}}>
				</div>

				{/* Текст "Today" на правому кінці синього бару або поза ним */}
				<span style={{
					position: 'absolute',
					right: '8px',
					top: '50%',
					transform: 'translateY(-50%)',
					color: '#fff',
					fontSize: '14px',
					padding: '0 8px',
					background: 'rgba(0, 0, 0, 0.2)',
					borderRadius: '6px',
					whiteSpace: 'nowrap',
					zIndex: 2
				}}>
                    Today {today}
                </span>
			</div>
		</div>
	);
};

export default LineBar;
