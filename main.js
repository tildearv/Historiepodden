
var episodes = ["1. Krimavsnittet","2. Sedlighetsavsnittet", "3. Ubåt i sikte!","4. Konstantinopel faller och Angola blir fritt","5. Engelska inbördeskriget och svenska revolutionen",
"6. Dom kallar oss snapphanar","7. Den svenska skogen","8. Studenthistoria","9. Midsommar","10. Amazonerna","11. Brasiliens självständighet 1822","12. the Troubles (Nordirland)",
"13. Det svenska befrielsekriget","14. Norrskensflamman brinner!","15. Juni, juli, augusti 1914","16. Berättelser om första världskriget","17. Marie Curie",
"18. Stormoguler och kolonialister i Indien","19. Ticker tape-parader, flygare och Cypern","20. Djingis Khans uppväxt, maktkamp och tid i Kina","21. Rösträttsfrågan",
"22. Djingis Khan: Erövrare i västerled","23. Dinosaurierna -1800-talets vetenskapliga strid","24. Fotbollskriget","25. Nordpolens erövrare?","26. Tyst vår - Rachel Carson och miljörörelsen",
"27. Adrianopel 378 - världsordning i gungning","28. Sverige och romerna","29. Antik teknik","30. Himmel eller helvete?","31: Mordkonspirationen mot Abraham Lincoln",
"32. Historia på vita duken","33. Nyköpings gästabud","34. Lucia","35. Francis Bacon - liv, intriger och vetenskap","36. Julbordet","37. Mesopotamien",
"38. Det Enigmatiska avsnittet",
"70. Imperiebyggaren Coco Chanel", "71. Biografiavsnittet", "72. Geiserik och hans Vandaler",
"73. Bad Romance", "74. Röda Molnets Krig","75. Bland Medeltida Djur & Odjur","76. Ernest Thiel - del 1: Riskkapitalisten","77. Du Sköna Nya Värld",
"78. Ernest Thiel - del 2: Kulturmecenaten","79. Jeanne d'Arcs Rättegång","80. Det Första Puniska Kriget","81. Den Vackra Dalkullan","82. von Humboldt i Sydamerika",
"83. Ungernrevolten 1956","84. Den Driftige Darius","85. Tesla","86. Folktro & Vatten","87. Alkemiska Avsnittet","88. Så enade Qin Kina","89. Drottning Kristina Del 1",
"90. Drottning Kristina del 2","91. Vegetariska Avsnittet","92. Bertil Ohlin - Ekonomi & Politik","93. Palmemordet","94. Häxjakten i Salem 1692","95. Nedslag i Hygienhistorien",
"96. Futurismens Italien","97. Lewis & Clark - Expeditionen Västerut","98. Minoernas Kreta: Myt & Verklighet","98. Minoernas Kreta: Myt & Verklighet",
"99. Filip II: Hellas Hegemon", "100. Jubileumsavsnittet","101. BANG i Berlin","102. Allas Krig Mot Alla","103. Den Biologiska Byteshandeln","104. Coup d'état",
"105. Gogols Ryssland","106. Olavs & Sigrids Vikingaintriger","107. Stor-Stinas Liv & Resor","108. Revolutionskejsarnas År","109. Dreyfusaffären","110. Farlig Midsommar",
"111. Bränn Borgarna!","112. Engelbrektsupproret","113. Rosalind Franklin","114. Historiska Förfalskningar","115. Bilden av Vasa","116. Olympiska Avsnittet",
"117. Riksdagsvalet & Kvalet 1982","118. Räddar Rienzo Rom?","119. Aleksandra Kollontaj Del 1","120. Aleksandra Kollontaj Del 2","121. Mesopotamiens Okrönta Drottning",
"122. Utopiska Avsnittet","123. Att Bringa Ordning i Tiden","124. Ancien Régime","125. Amerikanska Presidenter","126. Kafka & Prag","127.Breitenfeld","128. Lützen",
"129. Nazisterna & Konsten","130. Osmanernas Harem","131. Bland Medeltida Katoliker & Katarer","132. Sång Till Tryckfriheten","133. Dueller","134. Cuba",
"135. Den Historiske Jesus","136. Hundavsnittet","137. Den Första Världsomseglingen","138. Alva Myrdal","139. Anarki i Alexandria","140. Svenska Språkhistorier",
"141. Siamesiska avsnittet","142. De Amerikanska Strejkerna","143. Norge och Sverige 1940-45","144. När Man Hänger Katter","145. Vadstenabullret","146. Götiska Förbundet",
"147. Ryssland i Revolutionstid","148. Fasor i Teutoburgerskogen","149. Appeasement I: Rhenlandet","150. Appeasement II","151.Vår Hovliga Insider",
"152. Kung Arthur","153. Svenska Älvar","154. Koreakriget","155. Trastfältet 1389","156. Agrippina den yngre","157. Hunter S. Thompson","158. Nationaldagar",
"159. Stasi","160. Göbekli Tepe","161. Fossila Hemligheter","162. Dunkerque","163. Aten och Sparta 1/3","164. Slaget vid Marathon 2/3","165. Perserkrigens Klimax 3/3",
"166. Berättelser från Rom","167. De Sju Systrarna","168. CJL Almqvists Fejder","169. Relationer På 1600-talet","170 Södermalms Hungerkravaller","171. Duellen Om Nilen",
"172. Miljöbrott & Straff","173. Luthers Reformation","174. Mellan Getå & Akkavare","175. Nikaupproret år 532"]

function addOption(selectbox,text,value )
{
  var optn = document.createElement("OPTION");
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}

function addOption_list(){
  for (var i=0; i < episodes.length;++i){
    addOption(document.drop_list.episodes_list, episodes[i], episodes[i]);
  }
}

$(document).ready(function() {
  $( ".text_button" ).click(function() {
    var e = $('.episode_text').val();
    if (e != parseInt(e, 10)){
      $('.episode_text').val('');
      alert("Du har inte skrivit in ett nummer");
    }
    else if(e>episodes.length){
      $('.episode_text').val('');
      alert("Finns inget avsnitt med det numret")
    }
    else if(e<1){
      $('.episode_text').val('');
      alert("Finns inget avsnitt med det numret")
    }else{
      $('.episode_text').val('');
      window.location.href='avsnitt.html?episode='+ e;
    }
  });
});

$(document).ready(function() {
  $( ".drop_button" ).click(function() {
    var e = document.getElementById('select').selectedIndex;
    window.location.href='avsnitt.html?episode='+ e;
  });
});

function episode_nr(){
  var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    
  document.getElementById("avsnittsnamn").innerHTML = episodes[data.episode - 1];
}


