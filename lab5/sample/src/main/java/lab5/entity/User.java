package lab5.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user3")
public class User {
	@Id
	@GeneratedValue
	int id;
	String producer;
	String name;
	String imageUrl;
	int generation;
	
	
	public User() {
		
	}
	
	
	public User(int id, String producer, String name, String imageUrl, int generation) {
		this.id = id;
		this.producer = producer;
		this.name = name;
		this.imageUrl = imageUrl;
		this.generation = generation;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProducer() {
		return producer;
	}
	public void setProducer(String producer) {
		this.producer = producer;
	}
	public String getimageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public int getGeneration() {
		return generation;
	}
	public void setGeneration(int generation) {
		this.generation = generation;
	}


	@Override
	public String toString() {
		return "{\"id\":"+id+",\"name\":\""+name+"\",\"producer\":\""+producer+"\",\"imageUrl\":\""+imageUrl+"\", \"generation\":"+generation+"}";

	}
	

}
