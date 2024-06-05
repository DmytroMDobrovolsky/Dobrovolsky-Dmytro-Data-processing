package lab5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lab5.entity.PostComment2;

//@RepositoryRestResource(collectionResourceRel = "user3", path = "user")
public interface postCommentsRepository extends JpaRepository<PostComment2, Long> {

//  List<User> findByLastName(@Param("name") String name);

}