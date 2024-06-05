package lab5.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "post_comment2")
public class PostComment2 {
 
    @Id
    @GeneratedValue
    private Long id;
 
    private String review;
    
    @ManyToOne
    @JoinColumn(name="post_id", nullable=false)
    private Post2 post;
    
	public PostComment2() {		
	}
	
	public PostComment2(Post2 post, String review) {
		this.review=review;
		this.post=post;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "PostComment [id=" + id + ", review=" + review + "]";
	}
 
    
}
