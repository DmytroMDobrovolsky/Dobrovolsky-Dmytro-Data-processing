package lab5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lab5.entity.Post2;

//@RepositoryRestResource(collectionResourceRel = "user3", path = "user")
public interface postRepository extends JpaRepository<Post2, Long> {

//  List<User> findByLastName(@Param("name") String name);

}