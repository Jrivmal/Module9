import java.io.*;
import java.util.HashMap;
import java.util.Map;
/**
 * 
 * @author j_rm7
 *
 */
public class Words {
	/**
	 *
	 * @param args
	 * / This is the main method which start the execution*/
	
	 /** * This method is when there is an exception in case the file is not found
	 * @throws IOException*/

	 public static void main(String[] args) throws IOException {
		 /**
		  * Where the file that is going to be used is located
		  * @param newFile location
		  */	 
	 
	File file = new File("C:\\\\Users\\\\j_rm7\\\\OneDrive\\\\Desktop\\\\EclipseWorkSpace\\\\Words\\\\gutenberg");
	/**
	 * Opens the file and reads it, buffering the words, characters and lines
	 */
BufferedReader br = new BufferedReader(new FileReader(file));
String line;
Map<String, Long> counts = new HashMap<>();
while ((line = br.readLine()) != null) {
	/**
	 * split the lines by the given string
	 * @param line split
	 */
String[] words = line.split("[\\s.;,?:!()\"]+");
for (String word : words) {
	/**
	 * This is the method where the occurency of the words are counted 
	 * @param wordcounts
	 */
word = word.trim();
if (word.length() > 0) {
if (counts.containsKey(word)) {
counts.put(word, counts.get(word) + 1);
	} 
else {
counts.put(word, 1L);
}
		}

			}
for (Map.Entry<String, Long> entry : counts.entrySet()) {
System.out.println(entry.getKey() + " = " + entry.getValue());
		}
				}
	 }
	}