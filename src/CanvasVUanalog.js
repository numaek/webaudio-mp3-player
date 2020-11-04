

	var rpX = 0;
	var rpY = 0;

	var letzterWinkel            = [];
	    letzterWinkel['VUleft']  = 225;
	    letzterWinkel['VUright'] = 225;

	var vuAnaCtx;


	function nVuAnadraw(element, value, channel)
	{
		if( 1 == 1 )
		{
			var vuAnaCtxID = document.getElementById(element);
			if( vuAnaCtxID.getContext )
			{
				rpX      = 125 / 2;
				rpY      =  80 + 8;

				vuAnaCtx      = vuAnaCtxID.getContext('2d');

				vuAnaCtx.font = '7px Verdana';

				vuAnaCtx.clearRect(0, 0, 125, 80);

				vuAnaCtx.fillStyle = '#F5F5DC';
				vuAnaCtx.fillRect( 0, 0, 125, 80);

				var grd = vuAnaCtx.createRadialGradient(62, 80, 35, 62, 80, 38);
				grd.addColorStop(0, 'khaki');
				grd.addColorStop(1, '#F5F5DC');
				vuAnaCtx.fillStyle   = grd;
				vuAnaCtx.strokeStyle = '#F5F5DC';
				vuAnaCtx.arc(62, 80, 70, 0, 2*Math.PI, false);
				vuAnaCtx.stroke();
				vuAnaCtx.fill();

				vuAnaCtx.fillStyle = '#505050';
				vuAnaCtx.fillRect( 0, 80-15, 125, 15);

				vuAnaCtx.beginPath();
				vuAnaCtx.lineWidth   = 1;
				vuAnaCtx.fillStyle   = '#808080';
				vuAnaCtx.strokeStyle = '#808080';
				vuAnaCtx.arc(rpX, rpY, 32, nGradToRadial(225), nGradToRadial(315), false);
				vuAnaCtx.stroke();
				vuAnaCtx.closePath();
				vuAnaCtx.fill();

				vuAnaCtx.beginPath();
				vuAnaCtx.lineWidth   = 1;
				vuAnaCtx.strokeStyle = '#000000';
				vuAnaCtx.arc(rpX, rpY, 60, nGradToRadial(225), nGradToRadial(290), false);
				vuAnaCtx.stroke();

				vuAnaCtx.beginPath();
				vuAnaCtx.lineWidth   = 1;
				vuAnaCtx.strokeStyle = '#000000';
				vuAnaCtx.arc(rpX, rpY, 64, nGradToRadial(225), nGradToRadial(290), false);
				vuAnaCtx.stroke();

				vuAnaCtx.beginPath();
				vuAnaCtx.lineWidth   = 5;
				vuAnaCtx.strokeStyle = '#FF0000';
				vuAnaCtx.arc(rpX, rpY, 62, nGradToRadial(290), nGradToRadial(315), false);
				vuAnaCtx.stroke();
				vuAnaCtx.closePath();

				strokeSkaleLine(vuAnaCtx, 225, 64, 68, 1, '#000000', 1, '');
				strokeSkaleLine(vuAnaCtx, 228, 64, 72, 1, '#000000', 1, '-20');
				strokeSkaleLine(vuAnaCtx, 238, 64, 72, 1, '#000000', 1, '-10');
				strokeSkaleLine(vuAnaCtx, 248, 64, 72, 1, '#000000', 1, '-7');
				strokeSkaleLine(vuAnaCtx, 258, 64, 72, 1, '#000000', 1, '-5');
				strokeSkaleLine(vuAnaCtx, 267, 64, 72, 1, '#000000', 1, '-3');
				strokeSkaleLine(vuAnaCtx, 275, 64, 72, 1, '#000000', 1, '-2');
				strokeSkaleLine(vuAnaCtx, 283, 64, 72, 1, '#000000', 1, '-1');
				strokeSkaleLine(vuAnaCtx, 290, 64, 72, 1, '#FF0000', 1, '0');
				strokeSkaleLine(vuAnaCtx, 297, 64, 72, 1, '#FF0000', 1, '+1');
				strokeSkaleLine(vuAnaCtx, 305, 64, 72, 1, '#FF0000', 1, '+2');
				strokeSkaleLine(vuAnaCtx, 315, 64, 72, 1, '#FF0000', 1, '+3');

				strokeSkaleLine(vuAnaCtx, 225, 56, 60, 1, '#000000', 0,   '%');
				strokeSkaleLine(vuAnaCtx, 238, 56, 60, 1, '#000000', 0,  '20');
				strokeSkaleLine(vuAnaCtx, 251, 56, 60, 1, '#000000', 0,  '40');
				strokeSkaleLine(vuAnaCtx, 264, 56, 60, 1, '#000000', 0,  '60');
				strokeSkaleLine(vuAnaCtx, 277, 56, 60, 1, '#000000', 0,  '80');
				strokeSkaleLine(vuAnaCtx, 290, 56, 60, 1, '#000000', 0, '100');

				vuAnaCtx.font      = '10px Verdana';
				vuAnaCtx.fillText('dB',   3, 60);
				vuAnaCtx.fillText('VU', 107, 60);

				myText        = ( channel == 'r' ) ? 'RIGHT' : 'LEFT';
				vuAnaCtx.fillStyle = '#F5F5DC';
				vuAnaCtx.font      = '10px Verdana';
				vuAnaCtx.fillText(myText, rpX - ( vuAnaCtx.measureText(myText).width / 2 ), 76);

				// Nadel mit künstlicher Trägheit
				// ==============================
				maxGrad = 4;

				if( value == -1 )
				{
					value   = 0;
					alpha   = 225 + ( ( 290 - 225 ) * ( value / 100 ) );
				} else
				  {
					alpha   = 225 + ( ( 290 - 225 ) * ( value / 100 ) );
					if( alpha >   ( letzterWinkel[element] + maxGrad ) )
					{
						alpha = letzterWinkel[element] + maxGrad;
					} else
					if( alpha <   ( letzterWinkel[element] - maxGrad ) )
					{
						alpha = letzterWinkel[element] - maxGrad;
					}
				  }

				letzterWinkel[element] = alpha;
				strokeSkaleLine(vuAnaCtx, alpha, 32, 75, 1, '#000000', 1, '');

				// Canvas kopieren
				if( nDisplaySource == 'vu' )
				{
					destCtx = document.getElementById('canvasCopy').getContext('2d');
					if( channel == 'l' )
					{
						destCtx.drawImage(vuAnaCtxID, 0, 0, 125, 80,  10, 34, 175, 112);
					} else
					  {
						destCtx.drawImage(vuAnaCtxID, 0, 0, 125, 80, 195, 34, 175, 112);
					  }
				}
			}
		}
	}

	function strokeSkaleLine(vuAnaCtx, angle, radius_start, radius_end, width, color, textPos, text)
	{
		vuAnaCtx.beginPath();
		vuAnaCtx.lineWidth   = width;
		vuAnaCtx.strokeStyle = color;
		vuAnaCtx.fillStyle   = color;

		StartPunktX     = nRadPxToCosinus(nGradToRadial(angle), radius_start);
		StartPunktY     = nRadPxToSinus(  nGradToRadial(angle), radius_start);

		EndPunktX       = nRadPxToCosinus(nGradToRadial(angle), radius_end);
		EndPunktY       = nRadPxToSinus(  nGradToRadial(angle), radius_end);

		vuAnaCtx.moveTo(rpX + StartPunktX, rpY + StartPunktY );
		vuAnaCtx.lineTo(rpX + EndPunktX,   rpY + EndPunktY );

		vuAnaCtx.stroke();
		vuAnaCtx.closePath();

		if( text != '' )
		{
			if( textPos == 0 )
			{
				textX = nRadPxToCosinus(nGradToRadial(angle), radius_start-7);
				textY = nRadPxToSinus(  nGradToRadial(angle), radius_start-7);
			} else
			  {
				textX = nRadPxToCosinus(nGradToRadial(angle), radius_end+7);
				textY = nRadPxToSinus(  nGradToRadial(angle), radius_end+7);
			  }

			tl    = vuAnaCtx.measureText(text).width;
			vuAnaCtx.fillText(text, (rpX+(textX-(0.5*tl))), (rpY+textY+3));
		}
	}

