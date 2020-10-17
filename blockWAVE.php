
	<!-- WELLENFORM -->
	<tr class="trLine" id="nLineWave" style="display: none; visibility: hidden;">
		<td class="blockMain blockLeft">
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=WAVE&dir=up');"   title="Baustein nach oben verschieben">&uArr;</a><br>
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=WAVE&dir=down');" title="Baustein nach unten verschieben">&dArr;</a>
		</td>
		<td class="blockWave" style="height: 130px; vertical-align: bottom; padding-bottom: 5px; padding-left: 10px;" colspan="2">
			<div style="border: 2px solid #505050; border-radius: 5px; padding-left: 5px; margin-right: 5px;">
				<table border="0" style="height: 50px;">
					<tr>
						<td style="width: 350px;">
							<div                    style="float: left; width: 5px; height: 50px; margin-right: 3px; margin-top: 2px; background-color: #404040; border: 1px solid #303030; border-radius: 2px; cursor: Help;" title="Fortschritt: Musikdatei laden"     ><div id="waveLoad1" style="width: 5px; height: 0px; background-color: #00AAAA; border-radius: 2px;"></div></div>
							<div                    style="width: 335px; overflow: hidden; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
								<div    id="nCVwaveSpace"  style="position: absolute; width: 1px; height: 54px; margin-left: 50px; border-left: 1px solid red;"></div>
								<canvas id="nCVwaveBig" width="16000" height="50" style="border: 0px; margin-left: 50px;"></canvas>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div                    style="float: left; width: 5px; height: 50px; margin-right: 3px; margin-top: 2px; background-color: #404040; border: 1px solid #303030; border-radius: 2px; cursor: Help;" title="Fortschritt: Musikdatei decodieren"><div id="waveLoad2" style="width: 5px; height: 0px; background-color: #00AAAA; border-radius: 2px;"></div></div>
							<div id="canvasWvFrame" style="width: 335px; overflow: hidden; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
								<div    id="nCVwaveCue"  style="position: absolute; width: 2px; height: 54px; margin-left: 0px; border-left: 2px solid orange; display: none; visibility: hidden;"></div>
								<div    id="nCVwavePos"  style="position: absolute; width: 3px; height: 53px; margin-left: 0px; border: 1px solid red;"></div>
								<canvas id="nCVwaveForm" width="335" height="50" style="border: 0px; cursor: pointer;" title="Sprung zu dieser Position"></canvas>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</td>
		<td class="blockWave" style=" text-align: center; vertical-align: bottom; padding-bottom: 5px;">
			<table border="0" style="margin-left: 5px; border-spacing: 0px;">
				<tr>
					<td style="width: 70px; border-bottom: 1px solid #808080;"><span style="color: #FFFFFF; font-size: 10px; line-height: 20px; float: left;">SAMPLES:</span></td>
					<td style="width: 50px; border:        1px solid #808080; border-radius: 5px; background-color: #000000; cursor: Help;" id="nSamplesDisplay"></td>
					<td style="width: 5px;"></td>
					<td style="width: 60px; text-align:  left;"><input type="button" class="nMusicButton" id="nMusicButton_cue" style="width: 55px;" value="CUE" onclick="this.blur(); nMusic_cue(-1);" title="CUE-Punkt setzen"></td>
					<td style="width: 60px; text-align: right;"><input type="button" class="nMusicButton" id="nMusicButton_drc" style="width: 55px;" value="DRC" onclick="this.blur(); nMusic_drc();"  title="Dynamic Range Compression (Lautst&auml;rke-Anpassung)"></td>
				</tr>
			</table>
			<div style="clear: both;"></div><br>
			<canvas id="VUleft"  width="125" height="80" onclick="javascript:anaDisplaySwitch('ana');" title="Display Ein- und ausschalten" style="border: inset 2px #808080; cursor: pointer"></canvas>
			<canvas id="VUright" width="125" height="80" onclick="javascript:anaDisplaySwitch('ana');" title="Display Ein- und ausschalten" style="border: inset 2px #808080; cursor: pointer"></canvas>
		</td>
	</tr>
	<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
